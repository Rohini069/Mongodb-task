

const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/StudentData')
.then(()=>console.log("Database connected successfully"))
.catch((e)=> console.log("Database not connected",e));


const academicSchema = new mongoose.Schema({
    student_id : Number, 
    name : String , 
    grades : String, 
    subjects : Array
})

const cocurricularSchema = new mongoose.Schema({
    student_id : Number, 
    name : String , 
    Activity_type : String, 
    duration : Number,
    achievements : Array
})

const AcademicRecord = new mongoose.model('AcademicRecord',academicSchema);

const CocurricularRecord = new mongoose.model('CocurricularRecord',cocurricularSchema);

const createAcademic = async()=>{
    try{
        const academicData = await AcademicRecord.create([
            {
                student_id : 1, 
                name : 'Rishi', 
                grades : 'A', 
                subjects : ['Physics','Chemistry','Maths','Biology']
            },
            {
                student_id : 1, 
                name : 'Raj', 
                grades : 'A', 
                subjects : ['Physics','Chemistry','CS','Biology']
            },
            {
                student_id : 1, 
                name : 'Sam', 
                grades : 'B', 
                subjects : ['Physics','Chemistry','Biology']
            },
            {
                student_id : 1, 
                name : 'Roh', 
                grades : 'A', 
                subjects : ['Physics','Chemistry','Maths','Biology']
            }
        ])
    }
    catch(e)
    {
        console.log('error',e);
    }
}
createAcademic();

const createCocurricular = async()=>{
    try{
        const curricularData = await CocurricularRecord.create([
            {
                student_id: 1,
                name: 'Rishi',
                Activity_type: 'Sports',
                duration: 2,
                achievements: ['Football', 'Basketball']
            },
            {
                student_id: 2,
                name: 'Raj',
                Activity_type: 'Music',
                duration: 3,
                achievements: ['Piano', 'Guitar']
            },
            {
                student_id: 3,
                name: 'Sam',
                Activity_type: 'Art',
                duration: 1,
                achievements: ['Painting', 'Sculpture']
            },
            {
                student_id: 4,
                name: 'Roh',
                Activity_type: 'Debate',
                duration: 2,
                achievements: ['Regional Debate Championship', 'Best Speaker Award']
            }
            
        ]);  
    }
    catch(e)
    {
        console.log('error',e);
    }
}
createCocurricular();

//Read Academic Records
const readAcademic = async () => {
    try {
        const academicData = await AcademicRecord.find({});
        console.log('Academic Records:', academicData);
    } catch (e) {
        console.log('Error reading academic records:', e);
    }
};

// Read Cocurricular Records
const readCocurricular = async () => {
    try {
        const curricularData = await CocurricularRecord.find({});
        console.log('Cocurricular Records:', curricularData);
    } catch (e) {
        console.log('Error reading cocurricular records:', e);
    }
};

readAcademic();
readCocurricular();

// Update Academic Record
const updateAcademic = async () => {
    try {
        const updatedData = await AcademicRecord.updateOne(
            { student_id: 1 },
            { $set: { grades: 'A+' } }
        );
        console.log('Academic Record Updated:', updatedData);
    } catch (e) {
        console.log('Error updating academic record:', e);
    }
};

// Update Cocurricular Record
const updateCocurricular = async () => {
    try {
        const updatedData = await CocurricularRecord.updateOne(
            { student_id: 1 },
            { $set: { duration: 3 } }
        );
        console.log('Cocurricular Record Updated:', updatedData);
    } catch (e) {
        console.log('Error updating cocurricular record:', e);
    }
};

updateAcademic();
updateCocurricular();

// Delete Academic Record
const deleteAcademic = async () => {
    try {
        const deletedData = await AcademicRecord.deleteOne({ student_id: 3 });
        console.log('Academic Record Deleted:', deletedData);
    } catch (e) {
        console.log('Error deleting academic record:', e);
    }
};

// Delete Cocurricular Record
const deleteCocurricular = async () => {
    try {
        const deletedData = await CocurricularRecord.deleteOne({ student_id: 2 });
        console.log('Cocurricular Record Deleted:', deletedData);
    } catch (e) {
        console.log('Error deleting cocurricular record:', e);
    }
};

deleteAcademic();
deleteCocurricular();


