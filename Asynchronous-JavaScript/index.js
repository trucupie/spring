const oneTimeTasks = [];
let monitoringTaskId = null;

function addOneTimeTask(func, delay){
    oneTimeTasks.push({func, delay});
}

function runOneTimeTasks(){
    oneTimeTasks.forEach((task) => {
        setTimeout(task.func, task.delay);
    })
}

function startMonitoring() {
    monitoringTaskId = setInterval(() => {
        console.log('Monitoring Started...');
    }, 3000);
}

function stopMonitoring() {
    clearInterval(monitoringTaskId);
    console.log('Monitoring Stoppped.');
}

function startCountdown(duration) {
    let remainingTime = duration;

    const countDownID = setInterval(() => {
        remainingTime--;
        console.log(`T-minus ${remainingTime} seconds`);
        if (remainingTime === 0) {
            clearInterval(countDownID);
            console.log('Liftoff!');
        }
    }, 1000);
}

function scheduleMission ()
{
	startMonitoring();
	addOneTimeTask(function () {console.log("Pre-launch system check complete.");}, 5000);
	addOneTimeTask(stopMonitoring, 10000);
	addOneTimeTask(function () {startCountdown(10);}, 15000);

	runOneTimeTasks();
}

scheduleMission();