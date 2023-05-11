export let playingFlorest = false
export let playingRain = false
export let playingCanteen = false
export let playingFireplace = false

export default function Musics(){

  const musicFlorest = new Audio("./music/florest.wav")
  const musicRain = new Audio("./music/rain.wav")
  const musicCanteen = new Audio("./music/canteen.wav")
  const musicFireplace = new Audio("./music/fireplace.wav")
  const musicButtonPress = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const musicTimerEnd = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  
  musicFlorest.loop = true
  musicRain.loop = true
  musicCanteen.loop = true
  musicFireplace.loop = true

  function pressButton(){
    musicButtonPress.play()
  }

  function timerEnd(){
    musicTimerEnd.play()
  }

  function florest(){
    if(playingFlorest == false){
      musicFlorest.play()
      musicRain.pause()
      musicCanteen.pause()
      musicFireplace.pause()
      playingFlorest = true
      playingRain = false
      playingCanteen = false
      playingFireplace = false
    }else{
      musicFlorest.pause()
      stopMusic()
    }
  }

  function rain(){
    if(playingRain == false){
      musicFlorest.pause()
      musicRain.play()
      musicCanteen.pause()
      musicFireplace.pause()
      playingFlorest = false
      playingRain = true
      playingCanteen = false
      playingFireplace = false
    }else{
      musicRain.pause()
      stopMusic()
    }
  }

  function canteen(){
    if(playingCanteen == false){
      musicFlorest.pause()
      musicRain.pause()
      musicCanteen.play()
      musicFireplace.pause()
      playingFlorest = false
      playingRain = false
      playingCanteen = true
      playingFireplace = false
    }else{
      musicCanteen.pause()
      stopMusic()
    }
  }

  function fireplace(){
    if(playingFireplace == false){
      musicFlorest.pause()
      musicRain.pause()
      musicCanteen.pause()
      musicFireplace.play()
      playingFlorest = false
      playingRain = false
      playingCanteen = false
      playingFireplace = true
    }else{
      musicFireplace.pause()
      stopMusic()
    }
  }

  function stopMusic(){
    playingFlorest = false
    playingRain = false
    playingCanteen = false
    playingFireplace = false
  }

  return{
    florest,
    rain,
    canteen,
    fireplace,
    pressButton,
    timerEnd
  }
}