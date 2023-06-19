//// **function ที่ return ค่าให้ function ต่อเลย สามารถละการตั้งชื่อได้เลย
module.exports = (schema) => (input) => {
    const { value, error } = schema.validate(input);
    if (error) {
      throw error;
    }
    return value;
  };
  
  // //======= ถ้าเขียนแบบเต็ม ========
  // ///โดยตั้งชื่อ function ให้เป็น validate และ yyy
  // // หาก export แบบ default สามารถละทิ้งการตั้งชื่อ function ได้
  // // แล้วไปตั้งชื่อในไฟล์ที่ import ไปใช้
  // // ตัวอย่าง const validate =require("./validate");
  //// **function ที่ return ค่าให้ function ต่อเลย สามารถละการตั้งชื่อได้เลย
  
  // module.exports = function validate(schema) {
  //   return function yyy(input) {
  //     const { value, error } = schema.validate(input);
  //     if (error) {
  //       throw error;
  //     }
  //     return value;
  //   };
  // }
  