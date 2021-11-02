
/* muda cor de fundo*/

const obj_sel_fundo = document.querySelector('#sel_fundo')
const obj_div_cor_fundo = document.querySelector('#div_cor_fundo')

 obj_sel_fundo.addEventListener('change', funMudaCorFundo)

 function funMudaCorFundo() {
      obj_div_cor_fundo.classList.add(obj_sel_fundo.value)
 }


 /* mudar cor da fonte */
 const array_rb_fonte = document.querySelectorAll('[name="rb_fonte"]')
 const obj_area_teste = document.querySelector('#div_area_teste')
  
 for (rb_fonte of array_rb_fonte) {
      rb_fonte.addEventListener('click', funMudaCorFonte)
 }
 function funMudaCorFonte() {
  for (rb_fonte of array_rb_fonte) {
  if(rb_fonte.checked) {
      obj_area_teste.classList.add(rb_fonte.value)
  }
  else {
    obj_area_teste.classList.remove(rb_fonte.value)
}
}
 }


 /* decorar  com linha no meio e borda*/

 const obj_cb_linha_meio = document.querySelector("#cb_linha_meio")
 const obj_cb_borda = document.querySelector('#cb_borda')
 
 obj_cb_linha_meio.addEventListener('click', FunLinhameio)
 obj_cb_borda.addEventListener('click', FunBorda)

 function FunLinhameio() {
     if (obj_cb_linha_meio.checked) {
         obj_area_teste.classList.add(obj_cb_linha_meio.value)
     }
     else {
      obj_area_teste.classList.remove( obj_cb_linha_meio.value)

     }
 }

 function FunBorda() {
    if (obj_cb_borda.checked) {
            obj_area_teste.classList.add(obj_cb_borda.value)
        }
        else {
         obj_area_teste.classList.remove( obj_cb_borda.value)
 
        }
   }


    /*trocar texto */
    const obj_txt_texto_novo = document.querySelector('#txt_text_novo')
    const obj_bt_troca_texto = document.querySelector('#bt_troca_texto')
 
    obj_bt_troca_texto.addEventListener('click', FunTrocaTexto)
 
    function FunTrocaTexto() {
        if (obj_txt_texto_novo.value != '') {
            obj_area_teste.innerText = obj_txt_texto_novo.value
        }
        else {
            alert('Digite algo no campo')
        }
    }

/* Alterar cor de fundo do cabeçalho */
const obj_cabecalho = document.querySelector('#sel_cabecalho')
const obj_fundo_cabecalho = document.querySelector('header')

 obj_cabecalho.addEventListener('change', funMudaCorFundoCabec)

 function funMudaCorFundoCabec() {
      obj_fundo_cabecalho.classList.add(obj_cabecalho.value)
}


/* Alterar Imagem de Fundo */

const obj_cb_img_fundo = document.querySelector('.cb_img_fundo')
const obj_fundo_img = document.querySelector('.fundo_img')

obj_cb_img_fundo.addEventListener('click', FunImagemFundo)

function FunImagemFundo() {
     if ( obj_cb_img_fundo.checked) {
        obj_fundo_img.classList.add(obj_cb_img_fundo.value) }
    else {
        obj_fundo_img.classList.remove(obj_cb_img_fundo.value)
    }
    }
 


/* alterar opacidade*/
const obj_cb_opac = document.querySelector('.cb_opac')
const obj_img_opac = document.querySelector('#opaco')

obj_cb_opac.addEventListener('click', FunOpacidade)

function FunOpacidade() {
  if (obj_cb_opac.checked) {
   obj_img_opac.classList.add(obj_cb_opac.value)
  }
  else {
   obj_img_opac.classList.remove(obj_cb_opac.value)

  }

}


/*trocar fonte e texto */
const obj_bt_audiowide = document.querySelector('.Audiowide')
const obj_bt_monoton = document.querySelector('.Monoton')
const obj_p_fonte = document.querySelector('#p_fonte')

obj_bt_audiowide.addEventListener('click', FunTrocaFonteAudiowide)
obj_bt_monoton.addEventListener('click', FunTrocaFonteMonoton)


function FunTrocaFonteMonoton() {

    obj_p_fonte.classList.add(obj_bt_monoton.value)
    obj_p_fonte.innerText = 'fonte: ' + obj_bt_monoton.value
    
    }



function FunTrocaFonteAudiowide() {
 
   obj_p_fonte.classList.add(obj_bt_audiowide.value)
   obj_p_fonte.innerText = 'fonte: ' + obj_bt_audiowide.value

}

