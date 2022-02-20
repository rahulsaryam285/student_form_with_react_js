export let storeData = (data) => {

    if (data.storageName === "localStorage") {
        if (localStorage.getItem("Stu_Info") === null) {
            let newArray;
            (checkRollNo(data)) ? alert("Roll No already exist Please Fill Another Roll No") :
                newArray = []
            data.id = newArray.length
            newArray.push(data);
            localStorage.setItem("Stu_Info", JSON.stringify(newArray));
        } else {
            let mainData = JSON.parse(localStorage.getItem("Stu_Info"));
            if (checkRollNo(data)) {
                alert("Roll No already exist Please Fill Another Roll No")
            } else {
                data.id = mainData.length
                mainData.push(data)
                localStorage.setItem("Stu_Info", JSON.stringify(mainData));
            }
        }
    } else if (data.storageName === "sessionStorage") {
        if (sessionStorage.getItem("Stu_Info") === null) {
            let newArray
            (checkRollNo(data)) ? alert("Roll No already exist Please Fill Another Roll No") :
                newArray = []
            data.id = newArray.length
            newArray.push(data);
            sessionStorage.setItem("Stu_Info", JSON.stringify(newArray));
        } else {
            let mainData = JSON.parse(sessionStorage.getItem("Stu_Info"));
            if (checkRollNo(data)) {
                alert("Roll No already exist Please Fill Another Roll No")
            } else {
                data.id = mainData.length
                mainData.push(data)
                sessionStorage.setItem("Stu_Info", JSON.stringify(mainData));
            }
        }
    } else {
        if (document.cookie === "") {
            console.log("Rahul");
            let newArray;
            (checkRollNo(data)) ? alert("Roll No already exist Please Fill Another Roll No") :
                newArray = []
            data.id = newArray.length
            newArray.push(data);
            document.cookie = `Stu_Info=${JSON.stringify(newArray)}`
        } else {
            console.log("Saryam");
            let cookidata = document.cookie.split("=");
            let mainCookiData = JSON.parse(cookidata[1]);
            if (checkRollNo(data)) {
                alert("Roll No already exist Please Fill Another Roll No")
            } else {
                data.id = mainCookiData.length
                mainCookiData.push(data)
                document.cookie = `Stu_Info=${JSON.stringify(mainCookiData)}`
            }
        }
    }
}

export let checkRollNo = (data) => {
    console.log(data);
    let allMainData;
    if ((localStorage.getItem("Stu_Info") === null) && (sessionStorage.getItem("Stu_Info") === null) && (document.cookie === "")) {
        return false;
    } else if ((localStorage.getItem("Stu_Info") !== null) && (sessionStorage.getItem("Stu_Info") === null) && (document.cookie === "")) {
        allMainData = JSON.parse(localStorage.getItem("Stu_Info"));

    } else if ((localStorage.getItem("Stu_Info") === null) && (sessionStorage.getItem("Stu_Info") !== null) && (document.cookie === "")) {
        allMainData = JSON.parse(sessionStorage.getItem("Stu_Info"));

    } else if ((localStorage.getItem("Stu_Info") === null) && (sessionStorage.getItem("Stu_Info") === null) && (document.cookie !== "")) {
        let mainCookiData = document.cookie.split("=");
        allMainData = JSON.parse(mainCookiData[1]);

    } else if ((localStorage.getItem("Stu_Info") !== null) && (sessionStorage.getItem("Stu_Info") !== null) && (document.cookie === "")) {
        let lData = JSON.parse(localStorage.getItem("Stu_Info"));
        let sData = JSON.parse(sessionStorage.getItem("Stu_Info"));
        allMainData = [...lData, ...sData];

    } else if ((localStorage.getItem("Stu_Info") === null) && (sessionStorage.getItem("Stu_Info") !== null) && (document.cookie !== "")) {
        let sData = JSON.parse(sessionStorage.getItem("Stu_Info"));
        let sameData = document.cookie.split("=");
        let cData = JSON.parse(sameData[1]);
        allMainData = [...sData, ...cData];


    } else if ((localStorage.getItem("Stu_Info") !== null) && (sessionStorage.getItem("Stu_Info") === null) && (document.cookie !== "")) {
        let lData = JSON.parse(localStorage.getItem("Stu_Info"));
        let sameData = document.cookie.split("=");
        let cData = JSON.parse(sameData[1]);
        allMainData = [...lData, ...cData];


    } else {
        let lData = JSON.parse(localStorage.getItem("Stu_Info"));
        let sData = JSON.parse(sessionStorage.getItem("Stu_Info"));
        let sameData = document.cookie.split("=");
        let cData = JSON.parse(sameData[1]);
        allMainData = [...lData, ...sData, ...cData];

    }
    
    let num = 0;
    allMainData.map((item) => {
        if(item.rollNo === data.rollNo){
            num = 1
        }
    })

    return (num === 1) ? true : false;
}





