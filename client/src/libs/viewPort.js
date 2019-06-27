class ViewPort {
  constructor( element , elementPartTouch = 'top' , bodyPartTouch  = 'bottom' , add = 0 ){
    this.element = element ;

    this.body = {
      bottom: element.getBoundingClientRect().bottom + add,
      left: element.getBoundingClientRect().left + add,
      right: element.getBoundingClientRect().right + add,
      top: element.getBoundingClientRect().top + add ,
    }

    
    this.screen = {
      positionScreenBottom : null ,
      positionScreenTop : null,
    }
    
    this.elementPartTouch = elementPartTouch ;
    this.screenPartTouch = bodyPartTouch ;
  }
  
  detectViewport( callback ){
    window.addEventListener('scroll', (event)=>{
      this.screen.positionScreenBottom =  window.pageYOffset + window.innerHeight ;
      this.screen.positionScreenTop  =  window.pageYOffset ;
      if ( this.elementPartTouch  === 'top') {
        if (this.screenPartTouch  === 'bottom') {
          if ( this.body.top <= this.screen.positionScreenBottom ) {
            return callback(true , this.element  )
          }else{
            return callback(false , this.element  )
          }
        }else{
          if ( this.body.top <= 0 ) {
            return callback(true , this.element  )
          }else{
            return callback(false , this.element  )
          }
        }
      }else{
        if ( this.screenPartTouch  === 'bottom') {
          if ( this.body.bottom <= this.screen.positionScreenBottom ) {
            return callback(true , this.element  )
          }else{
            return callback(false , this.element )
          }
        }else{
          if ( this.body.bottom <= this.screen.positionScreenTop ) {
            return callback(true , this.element )
          }else{
            return callback(false , this.element  )
          }
        }
      }
    })
  }
}

export {ViewPort}