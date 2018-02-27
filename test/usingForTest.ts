// setTimeout(async () => {

//     let params = {
//         type: BudgetType.HOTEL,
//         channels: ["ctrip-hotel-domestic"],
//         input: {
//             checkInDate: "2018-1-22",
//             checkOutDate: "2018-1-24",
//             city: "CT_131"
//         },
//         step: STEP.FINAL,
//         data: [],
//         isAbroad: false
//     } as DataOrder;
//     // finalData.createRealTimeData(params, "ctrip-hotel-domestic")

//     setTimeout(async () => {
//         try {
//             let result = await getData.getData(params);
//             console.log("finnaly get the result : ", result);

//         } catch (e) {
//             console.log(e);
//         }
//     }, 6000);

//     // let result = await getData.getData(params);
//     // console.log("result =====>", result);

// }, 5000);





/* setTimeout(async () => {

    let params = {
        type: BudgetType.TRAFFICT,
        channels: ["ctrip-hotel-domestic"],
        input: {
            leaveDate: "2018-1-22",
            originPlace: "CT_179",
            destination: "CT_075"
        },
        step: STEP.FINAL,
        data: [],
        isAbroad: false
    } as DataOrder;
    // finalData.createRealTimeData(params, "ctrip-hotel-domestic")

    // setTimeout(async () => {
    try {
        let result = await getData.getData(params);
        console.log("finnaly get the result : ", result);

    } catch (e) {
        console.log(e);
    }
    // }, 6000);
}, 4000); */



/* setTimeout(async () => {
    let name = "ctrip-train-domestic";
    let input = {
        leaveDate: '2018-01-27T10:00:00.000Z',
        originPlace: '1816670',
        destination: '1815285',
        earliestGoBackDateTime: '2018-01-28T01:00:00.000Z',
        latestArrivalDateTime: '2018-01-27T10:00:00.000Z'
    };
    let num = 0;
    let timer = setInterval(() => {
        console.log("ok + ", num++);
    }, 1000);

    // let result = await API["dtask_mgr"].runTask({ name, input });

    let result = await trafficStorage.getData(input, name);
    console.log("result ====> ", JSON.stringify(result.data[0]));
    clearInterval(timer);
}, 4000); */