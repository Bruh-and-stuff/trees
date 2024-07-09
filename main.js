var period = new Audio("period.mp3")
var meltbitter = new Audio("melt bitter.mp3")

lwX = 0
lwY = 0
lwS = 0

rwX = 0
rwY = 0
rwS = 0

function preload(){
    period = loadSound("period.mp3")
    meltbitter = loadSound("melt bitter.mp3")
}

function setup(){
    canvar = createCanvas(500, 500)
    canvar.position(800, 300)

    mYvIdEoYaY = createCapture(VIDEO)
    mYvIdEoYaY.hide()

    fishNet = ml5.poseNet(mYvIdEoYaY, heehee)
    fishNet.on("pose", PosesInTheBank)
}

function draw(){
    periodPlaying = period.isPlaying()

    if(rwS > 0.2){
        circle(rwX, rwY, 20)
        meltbitter.pause()
        if(periodPlaying == false){
            period.play()
        }
    }

    meltbitterPlaying = meltbitter.isPlaying()

    if(lwS > 0.2){
        circle(lwX, lwY, 20)
        period.pause()
        if(meltbitterPlaying == false){
            meltbitter.play()
        }
    }
}

function heehee(){
    console.log("Michael Jackson")
}

function PosesInTheBank(result){
    if(result.length > 0){
        console.log(result)

        lwX = result[0].pose.leftWrist.x
        lwY = result[0].pose.leftWrist.y
        console.log(lwX + ", " + lwY)

        rwX = result[0].pose.rightWrist.x
        rwY = result[0].pose.rightWrist.y
        console.log(rwX + ", " + rwY)

        lwS = result[0].pose.keypoints[10].score
        console.log(rwS)

        rwS = result[0].pose.keypoints[10].score
        console.log(rwS)
    }
}