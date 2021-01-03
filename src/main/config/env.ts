export default {
  // mongoUrl: process.env.MONGO_URL || 'mongodb+srv://crud_user01:tddcleanpassword01@cluster0.zvqjy.mongodb.net/tdd-clean-node?retryWrites=true&w=majority',
  mongoUrl: process.env.MONGO_URL || 'mongodb://mongo:27017/tdd-clean-node-api',
  port: process.env.PORT || 5050,
  jwtSecret: process.env.JWT_SECRET || 'lkw+_%3950'
}
