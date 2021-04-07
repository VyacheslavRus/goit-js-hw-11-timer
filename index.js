class Timer {
    constructor(selector, targetDate){
      this.selector = document.querySelector(`${selector}`);
      this.targetDate = targetDate;
  }
  
    createTimer() {
    const nowDate = new Date('4, 9, 2021').getTime();
    function pad(value){
      return String(value).padStart(2, '0');
    }
    
    let intervalId = setInterval(()=>{
      const date = Date.now();
      let deltaTime = nowDate - date
      if(deltaTime < 0){
        deltaTime = 0;
        clearInterval(intervalId)
      }
      this.selector.querySelector('[data-value="days"]').textContent = pad(Math.floor((deltaTime / (1000 * 60 * 60 * 24))));
      this.selector.querySelector('[data-value="hours"]').textContent = pad(Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      this.selector.querySelector('[data-value="mins"]').textContent = pad(Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60)));
      this.selector.querySelector('[data-value="secs"]').textContent = pad(Math.floor((deltaTime % (1000 * 60)) / 1000));
    }, 1000)
      }
    }
      
  const timer = new Timer('#timer-1')
  timer.createTimer()



//   class Timer {
//     constructor(selector, targetDate){
//     this.selector = document.querySelector(`${selector}`);
//     this.targetDate = targetDate;
//   }
//   createTimer() {
// const nowDate = new Date(this.targetDate).getTime()
//  function pad(value){
//   return String(value).padStart(2, ‘0’);
// }
//   let intervalId = setInterval(()=>{
//   const date = Date.now();
//   let deltaTime = nowDate - date
//   if (deltaTime < 0){
//     deltaTime =0
//     clearInterval(intervalId)
//   }
//   this.selector.querySelector(‘[data-value=“days”]‘).textContent = pad(Math.floor((deltaTime / (1000 * 60 * 60 * 24))));
//   this.selector.querySelector(‘[data-value=“hours”]‘).textContent = pad(Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//   this.selector.querySelector(‘[data-value=“mins”]‘).textContent =  pad(Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60)));
//   this.selector.querySelector(‘[data-value=“secs”]‘).textContent = pad(Math.floor((deltaTime % (1000 * 60)) / 1000));
// }, 1000)
//     }
//     }
// const timer = new Timer(‘#timer-1’, ‘Jul 17, 2019’)
// timer.createTimer()