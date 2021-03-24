import AuthorizedLayout from "../layouts/authorized";
import Form from "../components/form";
import Bar from "../components/bar";
import Loading from "../components/loading";
import Table from "../components/table";
import SearchBar from "../components/searchbar";
import { fetchBalances, addNewBalance, removeUserBalance } from "../store/balanceActions";
import { setLoading } from "../store/commonActions";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { useSpring, animated } from "react-spring";
import { useState, useEffect } from "react";
import { usePrevious } from "../utils/hooks";
import { sortByDate, getNetWorth } from "../utils";

import styles from "../styles/Summary.module.css";

const tableColumns = [
  {
    Header: "Type",
    accessor: "type",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  // {
  //   Header: "Created",
  //   accessor: "created",
  // },
  {
    Header: "Balance",
    accessor: "balance",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const availableTypes = [
  { value: "Any", label: "Any" },
  { value: "Asset", label: "Asset" },
  { value: "Liability", label: "Liability" },
]

export async function getStaticProps() {
  return {
    props: {
      oauth2ClientId: process.env.clientId,
    }
  }
}

const Summary = ({user, balances, isLoading, addNewBalance, fetchBalances, oauth2ClientId, removeUserBalance}) => {
  if (!user || isLoading) {
    return <Loading/>
  }

  const [filterName, setFilterName] = useState("");
  const [showForm, setShowForm] = useState(false);
  const displayForm = (value) => setShowForm(value);
  const data = balances ? balances : [];
  data.sort(sortByDate);

  const filteredData = data.filter(a => a.name.includes(filterName));

  const networth = getNetWorth(data);
  const prevNetWorth = usePrevious(networth.total);
  const totalNetworth = useSpring({
    number: networth.total,
    from: { number: prevNetWorth ? prevNetWorth : 0 },
  });
  const onFormEntry = (nb) => {
    if (!!nb) {
      addNewBalance(nb)
      setShowForm(false)
    }
  }
  const onFilterInput = (e) => {
    setFilterName(e.target.value)
  }
  const onRowDelete = (index) => {
    const i = parseInt(index);
    removeUserBalance(i, filteredData[index]);
  }
  useEffect(async () => {
    if (!balances) {
      await fetchBalances();
    }
  }, []);
  return (
    <AuthorizedLayout oauth2ClientId={oauth2ClientId}>
      <div className={styles.dashboard}>
        <div className={styles.welcome}><span>Hi {user ? user.given_name : ""}, Welcome back!</span></div>
        <div className={styles.panels}>
          <div className={styles.leftpanel}>
            <div className={styles.filters}>
              <SearchBar placeholder="search by name..." onChange={onFilterInput}/>
            </div>
            <Table columns={tableColumns} data={filteredData} onActionDelete={onRowDelete}/>
          </div>
          <div className={styles.rightpanel}>
            <div className={styles.totals}>
              <p>Total Net Worth</p>
              <div className={styles.totalnetworth}>
                <span className={styles.dollar}>$</span>
                <animated.span className={styles.networth}>
                  {totalNetworth.number.interpolate((num) =>num.toFixed(2))}
                </animated.span>
              </div>
              <button
                className={styles.addassetbtn}
                onClick={displayForm.bind(null, true)}
              >
                + Add Balance
              </button>
            </div>
            <div className={styles.rankcards}>
              <Bar title="Assets" data={data.filter(a => a.type === "Asset")} current={networth.assets} total={networth.assets + networth.liabilities} color="#00cba9"/>
              <Bar title="Liabilities" data={data.filter(a => a.type === "Liability")} current={networth.liabilities} total={networth.assets + networth.liabilities} color="#FF5D5D"/>
            </div>
          </div>
        </div>
        {showForm && (
          <Form
            onSubmit={onFormEntry}
            onClose={displayForm.bind(null, false)}
          />
        )}
      </div>
    </AuthorizedLayout>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBalances: bindActionCreators(fetchBalances, dispatch),
    addNewBalance: bindActionCreators(addNewBalance, dispatch),
    setLoading: bindActionCreators(setLoading, dispatch),
    removeUserBalance: bindActionCreators(removeUserBalance, dispatch),
  }
}

export default connect(state=>({
  user: state.user.user, 
  isLoading: state.common.isLoading, 
  balances: state.balance.balances}), mapDispatchToProps)(Summary);
