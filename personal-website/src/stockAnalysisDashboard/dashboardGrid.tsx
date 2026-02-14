function DashboardGrid({ stockData }: { stockData: any }) {
  return (
    <div>
      Dashbaord Grid Component
      {JSON.stringify(stockData)}
    </div>
  );
}
export default DashboardGrid;
