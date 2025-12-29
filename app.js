// app.js
function selectType(type) {
    if(type === 'screen') {
        window.location.href = "brands.html";
    } else if(type === 'battery') {
        alert("قيد التحديث");
    } else {
        console.log("نوع غير معروف");
    }
}
