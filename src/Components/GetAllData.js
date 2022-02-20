

const GetAllData = () => {
    let MainData;
    if ((localStorage.getItem("Stu_Info") === null) && (sessionStorage.getItem("Stu_Info") === null) && (document.cookie === "")) {
        MainData = []
    } else if ((localStorage.getItem("Stu_Info") !== null) && (sessionStorage.getItem("Stu_Info") === null) && (document.cookie === "")) {
        MainData = JSON.parse(localStorage.getItem("Stu_Info"));

    } else if ((localStorage.getItem("Stu_Info") === null) && (sessionStorage.getItem("Stu_Info") !== null) && (document.cookie === "")) {
        MainData = JSON.parse(sessionStorage.getItem("Stu_Info"));

    } else if ((localStorage.getItem("Stu_Info") === null) && (sessionStorage.getItem("Stu_Info") === null) && (document.cookie !== "")) {
        let mainCookiData = document.cookie.split("=");
        MainData = JSON.parse(mainCookiData[1]);

    } else if ((localStorage.getItem("Stu_Info") !== null) && (sessionStorage.getItem("Stu_Info") !== null) && (document.cookie === "")) {
        let lData = JSON.parse(localStorage.getItem("Stu_Info"));
        let sData = JSON.parse(sessionStorage.getItem("Stu_Info"));
        MainData = [...lData, ...sData];

    } else if ((localStorage.getItem("Stu_Info") === null) && (sessionStorage.getItem("Stu_Info") !== null) && (document.cookie !== "")) {
        let sData = JSON.parse(sessionStorage.getItem("Stu_Info"));
        let sameData = document.cookie.split("=");
        let cData = JSON.parse(sameData[1]);
        MainData = [...sData, ...cData];


    } else if ((localStorage.getItem("Stu_Info") !== null) && (sessionStorage.getItem("Stu_Info") === null) && (document.cookie !== "")) {
        let lData = JSON.parse(localStorage.getItem("Stu_Info"));
        let sameData = document.cookie.split("=");
        let cData = JSON.parse(sameData[1]);
        MainData = [...lData, ...cData];


    } else {
        let lData = JSON.parse(localStorage.getItem("Stu_Info"));
        let sData = JSON.parse(sessionStorage.getItem("Stu_Info"));
        let sameData = document.cookie.split("=");
        let cData = JSON.parse(sameData[1]);
        MainData = [...lData, ...sData, ...cData];

    }
    
    return MainData;

}

export default GetAllData;

