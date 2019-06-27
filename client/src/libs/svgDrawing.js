function draw  ( body ) {
  

class DrawScroll {
  constructor( svglength , svg , body ){

    //////////////// the screen proprety ////////////////
    this.srceen = {
      /// length of body
      body : body ,
      /// length of screen
      windowHeigth : null,
      /// pourenntage of page
      pourcentage : 0 ,
      render : function (){
        let body =  document.querySelector('body') ;
        this.windowHeigth = this.body.clientHeight - window.innerHeight ;
      }
    }
    
    
    //////// the svg //////
    this.svg = {
      'strokeDasharray' :  svglength,
      'element' : svg,
      'pourcentage' : 0,
      'valueDashArray' :  svglength,
      
      render : function ( pourcentage  ){
        this.pourcentage = pourcentage ;
        let pourcentageLegth =  (  this.strokeDasharray * (   this.pourcentage / 100  ) ) ;
        // rest the value
        this.valueDashArray = this.strokeDasharray ;
        
        this.valueDashArray = this.valueDashArray - pourcentageLegth ;
        
        this.element.style.strokeDashoffset=  this.valueDashArray ;
      },
      
      addStyleBase(){
        this.element.style.strokeDashoffset=  this.valueDashArray ;
        this.element.style.strokeDasharray = this.strokeDasharray;
      }
    }
    
    ////////
    
    this.srceen.render();
    this.svg.addStyleBase();
    this.render();
    this.view();
  }
  
  view(){
    window.addEventListener('scroll', (e)=>{
      this.render()
    })
  }
  
  render(){
    this.srceen.pourcentage =  (100 * window.pageYOffset ) / this.srceen.windowHeigth ; 
    this.svg.render(  this.srceen.pourcentage  )
  }
  
}new DrawScroll( 230 , document.querySelector('.exterieur') , body );

} 



export { draw } ;