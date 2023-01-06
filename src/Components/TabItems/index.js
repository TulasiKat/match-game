import './index.css'

const TabItem = props => {
  const {details, selectedTab, tabChanged} = props
  const {displayText, tabId} = details

  const tabChanging = () => {
    tabChanged(tabId)
  }

  return (
    <li>
      <button
        type="button"
        onClick={tabChanging}
        className={tabId === selectedTab ? 'selected-tab' : null}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
