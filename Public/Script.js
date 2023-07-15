// -----JS CODE-----
//@input SceneObject UpObject
//@input SceneObject DownObject
//@input string UpTweenName
//@input string DownTweenName

var stopRun = false
var up = false
function startingTween() {
  stopRun = true
  print('starting')
}

function tweenComplete() {
  stopRun = false
  print('complete')
}

var event = script.createEvent('BrowsRaisedEvent')
event.faceIndex = 0
event.bind(function(eventData) {
  if (stopRun) return
    
   if(!up){
  global.tweenManager.startTween(
    script.UpObject,
    script.UpTweenName,
    tweenComplete,
    startingTween
  )
        up = true
    } else{
        
   global.tweenManager.startTween(
    script.DownObject,
    script.DownTweenName,
    tweenComplete,
    startingTween)
        up = false
    }
})// -----JS CODE-----
//@input SceneObject UpObject
//@input SceneObject DownObject
//@input string UpTweenName
//@input string DownTweenName

var stopRun = false
var up = false
function startingTween() {
  stopRun = true
  print('starting')
}

function tweenComplete() {
  stopRun = false
  print('complete')
}

var event = script.createEvent('BrowsRaisedEvent')
event.faceIndex = 0
event.bind(function(eventData) {
  if (stopRun) return
    
   if(!up){
  global.tweenManager.startTween(
    script.UpObject,
    script.UpTweenName,
    tweenComplete,
    startingTween
  )
        up = true
    } else{
        
   global.tweenManager.startTween(
    script.DownObject,
    script.DownTweenName,
    tweenComplete,
    startingTween)
        up = false
    }
})