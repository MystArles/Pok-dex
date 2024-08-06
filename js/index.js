$(document).ready(function () {
  
    // Variáveis Globais
    let loading = false;
    let dataPokemon = null;

    let num_pag_max = 0;
    let pokedexImgs = [];
    let backImgsHighest = [];
    let frontImgsHighest = [];

    let pageActual = 1;
    //limit pokemons máximo = 949
    let limitPokemons = 802;
    let limitPage = 10;

    //controle paginação dos movimentos do pokemom
    let pageMovActual = 1;
    let pokemonMovs = [];
    let limitPageMov = 10;

    //define quantidade máxima de páginas
    num_pag_max = Math.ceil(pokedexImgs.length / limitPage);
   
    //define quantidade máxima de páginas do movimentos
    num_pag_max_mov = Math.ceil(pokemonMovs.length / limitPageMov);

//===================================================================================================
    //inicializa a pokedex
    function startPokedex() {


        $('.page-1').on('click', () => {
            controlePaginacao(--pageActual);
        });

        $('.page-2').on('click', () => {
            controlePaginacao(++pageActual);
        });


        $width = $(window).width();
        // console.log($width);debugger
        sizePage($width);

        pokedexOpen($width);        
        
    }

    window.onresize=function() {
        $width = getDimensions();
        let $display = $('.cover').css('display');
        if($display === 'block'){
            sizePage($width);
        }
        pokedexOpen($width); 
    }
    // Inicializa toda a aplicação
    startPokedex();

//===================================================================================================
    //Abre a tampa da pokedex
    function pokedexOpen($width){

        $('#yellowTriangle').on('click', ()=>{
            
            if($width < 575){
                $('.cover').css('transform','rotateX(180deg) translateY(420px)');
                $('#logo').fadeOut(500);
                $('#yellowTriangle').fadeOut(500);
                $('.cover').fadeOut(900,()=>{
                    $('.side-left').fadeIn(1);
                }); 
            }else{
                $('.cover').css('transform','rotateY(180deg) translateX(-300px)');
                $('#logo').fadeOut(500);
                $('#yellowTriangle').fadeOut(500);
                $('.cover').fadeOut(900,()=>{
                    $('.sombra_container').css('box-shadow','-1vh .8vh 0vh 0.4vh rgb(158, 18, 42)');
                    $('.side-right').fadeIn(1);
                });                
            }

            return false;
        });
        // Fecha a tampa da pokedex
        pokedexClose($width); 

    }

    // Fecha a tampa da pokedex
    function pokedexClose($width){

        $('#yellowTriangleR').on('click', ()=>{
            $('.cover').attr('transition-duration','1s');
            $('.cover').show();
            if($width < 575){
                $('.cover').css('transform','rotateX(360deg) translateY(0px)');
                $('.side-left').fadeOut(1);
            }else{
                $('.cover').css('transform','rotateY(360deg) translateX(0px)');
                    $('.side-right').fadeOut(1, ()=>{
                $('.sombra_container').css('box-shadow','-1vh .8vh 0vh 0.8vh rgb(184,184,184)');  
                });
            }
            $('#logo').fadeIn(500);
            $('#yellowTriangle').fadeIn(500);

             
            sizePage($width);
            return false;
        });
        
        
    }

    function sizePage(width){
        
        if(width < 575){
            $('.side-right').fadeIn();
            $('.side-left').css('display', 'none');
        }else{
            $('.side-left').fadeIn();
            $('.side-right').css('display', 'none');
        }
    }
    function closeShowMovs(){
        $('#yellowTriangleM').on('click', ()=>{
            $('#movsFather').fadeOut(1000, ()=>{
                $('#movs .movsImg').empty();
                $('#movs > ul > li').remove();           
            });

        });
    }
});








