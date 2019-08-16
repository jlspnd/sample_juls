import React, { Fragment, Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import '../App.css';

const DEVICES_QUERY = gql`
    query DevicesQuery {
        devices {
            id
            device_name
            device_ip
            date_time
        }
    }
`;

class ListingPage extends Component {

    render() {
        return (
            <Fragment>
            	<div style={{ 'margin': '2rem 5rem', 'backgroundColor': '#fff' }}>
            		<table class="table table-hover">
					  <thead>
					    <tr>
					      <th scope="col">Device ID</th>
					      <th scope="col">Device Name</th>
					      <th scope="col">IP Address</th>
					      <th scope="col">Date / Time</th>
					    </tr>
					  </thead>
					<tbody>
							<Query query={DEVICES_QUERY}>
		            			 {
			                        ({ loading, error, data }) => {
			                            if(loading) return <h4>Loading...</h4>
			                            if(error) console.log(error);

			                            return <Fragment>
			                            	 {
			                                    data.devices.map(device => (
			                                        <tr className="table-light" key={ device.id }>
			                            	 		  	<td>{ device.id }</td>
			                            	 		  	<td>{ device.device_name }</td>
												        <td>{ device.device_ip }</td>
												        <td>{ device.date_time }</td>
			                            	 		</tr>
			                                    ))
			                                }
			                            </Fragment>;
			                        }
			                     }
							</Query>
					</tbody>
				  </table> 
				  <ul class="pagination float-right">
				    <li className="page-item disabled">
				      <a className="page-link" href="#">&laquo;</a>
				    </li>
				    <li className="page-item active">
				      <a className="page-link" href="#">1</a>
				    </li>
				    <li className="page-item">
				      <a className="page-link" href="#">2</a>
				    </li>
				    <li className="page-item">
				      <a className="page-link" href="#">3</a>
				    </li>
				    <li className="page-item">
				      <a className="page-link" href="#">4</a>
				    </li>
				    <li className="page-item">
				      <a className="page-link" href="#">5</a>
				    </li>
				    <li className="page-item">
				      <a className="page-link" href="#">&raquo;</a>
				    </li>
				  </ul>
				</div>
            </Fragment>
        )
    }
}

export default ListingPage;

