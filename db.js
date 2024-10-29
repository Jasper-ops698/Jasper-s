const mongoose =  require('mongoose');

const connectDB = async  () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            userNewUrIparser: true,
            useUnifiedTopology: true,
        });
        console.log("MONGODB connected");
    } catch (error) {
        console.error("MongoDB connected");
        process.exit(1);
    }
};

module.exports = connectDB;