// צרו פונקציה שמקבלת מערך (ובודקת אם הוא מערך ואם יש בו אלמנטים)
// שתחזיר את האלמנט שבמיקום האחרון
//
// במידה והתקבל מערך שאין בו אלמנטים הפונקציה צריכה להחזיר (1-)
// במידה ומה שהתקבל אינו מערך הפונקציה תחזיר ״this is not an array"

function checkArray(arr) {
    if (Array.isArray(arr)) {
        if (arr.length > 0) {
            return arr[arr.length - 1];
        }
        return -1
    }
    return "This is not an array"
}

console.log(checkArray(["hey", 2, "what"]));