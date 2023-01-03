
import  { Doughnut,} from "react-chartjs-2";
const Dataadmin = () => {

    const data = {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };
      

    return ( 

<div className="container">
    <div className="row">
        <div className="card col-5 ms-2">
            <div className="card-body">
                <h6>Total Products</h6>
            </div>
        </div>
        <div className="card col-5 ms-2">
            <div className="card-body">
                <h6>Total Income</h6>
            </div>
        </div>
        <div className="card col-6 mt-2 ms-2">
            <div className="card-body">
                <h6>USERS</h6>
            </div>
        </div>
    </div>
    <div className="row">
        <h5> Statistics</h5>
       
       
        
    </div>
    <div className="row">
        <h5>Active users</h5>
    </div>
</div>

     );
}
 
export default Dataadmin;