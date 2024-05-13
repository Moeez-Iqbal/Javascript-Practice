//  Object Destructuring
const course = {
    coursenmae: "FrontEnd Development",
    price: 999,
    courseInstructor: "Amaaz"
}

// course.courseInstructor this method is ok but when we need to print two or three values of key then we have to write commented syntax three times which makes our code unclean to make the code clean we use object destructure and it is given below

const {courseInstructor} =course // If we think codeInstructor is very big variable we can change it by using  This whole Process is called object destructor
const {courseInstructor:instructor}=course
console.log(courseInstructor);
console.log(instructor);

// JSON

// {
//     name: "Moeez",
//     age: 21,
//     price: "free"
// 
// } This show some error ingnore it because it is acting as JSON