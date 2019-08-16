const { 
	GraphQLObjectType, 
	GraphQLString, 
	GraphQLList,
	GraphQLSchema,
	GraphQLID
 } = require('graphql');

 var dataSource = [
	{"id": "1","device_name": "Apple iPhone 6","device_ip": "192.168.0.1","date_time": "2019-08-16 9:00"},
	{"id": "2","device_name": "Sony Viao E-Series","device_ip": "192.168.0.2","date_time": "2019-08-05 3:54"},
	{"id": "3","device_name": "Blackberry","device_ip": "192.168.0.3","date_time": "2019-08-15 2:00"},
	{"id": "4","device_name": "Nokia","device_ip": "192.168.0.4","date_time": "2019-08-01 9:00"},
	{"id": "5","device_name": "ASUS ROG","device_ip": "192.168.0.5","date_time": "2019-08-02 11:00"},
	{"id": "6","device_name": "Samsung Note 10","device_ip": "192.168.0.6","date_time": "2019-08-05 8:00"}
   ];

const DeviceType = new GraphQLObjectType({
	name: 'Device',
	fields: () => ({
		id: { type: GraphQLID },
		device_name: { type: GraphQLString },
		device_ip: { type: GraphQLString },
		date_time: { type: GraphQLString }
	})
});

// Root Query
const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		devices: {
			type: new GraphQLList(DeviceType),
			resolve(parent, args) {
				return dataSource;
			}
		},
		device: { 
			type: DeviceType,
			args: {
				id: { type: GraphQLID }
			},
			resolve(parent, {id}) {
				return dataSource.find(device => device.id === id);
			}
		}
	}
});

module.exports = new GraphQLSchema({
	query: RootQuery
});
