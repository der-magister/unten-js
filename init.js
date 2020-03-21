//  Unten - ein Rollenspiel im Retrodesign
//
//   Copyright (C) 2017-2018 Heiko Wolf
//
//   This program is free software; you can redistribute it and/or modify
//   it under the terms of the GNU General Public License As published by
//   the Free Software Foundation; either version 2 of the License, or
//   (at your option) any later version.
//
//   This program is distributed in the hope that it will be useful,
//   but WITHOUT ANY WARRANTY; without even the implied warranty of
//   MERCHANTABILITY Or FITNESS For A PARTICULAR PURPOSE.  See the
//   GNU General Public License For more details.
//
//   You should have received a copy of the GNU General Public License along
//   With this program; if not, write to the Free Software Foundation, Inc.,
//   51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
//
//   Kontakt: unten@skywave-2000.de

//Startfunktion bei Neuem Spiel

function f_init ()
{
  if (document.getElementById ("TextName").value == "Hier Charakternamen eingeben" || 
     (document.getElementById ("TextName").value == "Erst Charakternamen definieren!") ||
     (document.getElementById ("TextName").value == "")) 
  {
    document.getElementById ("TextName").value = "Erst Charakternamen definieren!";
  }
  else
  {
    //Startbildschirmelemente verstecken
    document.getElementsByTagName ("h1")[0].style.visibility = "hidden";   
  
    v_textName.style.visibility = "hidden";

    document.getElementById ("krieger").style.visibility = "hidden";
    document.getElementById ("dieb").style.visibility = "hidden";
    document.getElementById ("zauberer").style.visibility = "hidden";
    document.getElementsByTagName ("label")[0].style.display = "none";
    document.getElementsByTagName ("label")[1].style.display = "none";
    document.getElementsByTagName ("label")[2].style.display = "none";

    v_buttonNSpiel.style.visibility = "hidden";
    v_buttonASpiel.style.visibility = "hidden";

    document.getElementById ("kredits").style.visibility = "hidden";
    document.getElementById ("changelog").style.visibility = "hidden"; 
    document.getElementById ("lade").style.visibility = "visible";

    v_stand = "neu";

    o_gfx.p_init ();
    o_sound.p_load ();
  }
}

function f_init_go ()
{   
  //Titelmusik stoppen
  document.getElementById ("musik0").pause ();
  
  //Variablen setzen
  v_lvl = 1;
  v_zone = "Gebiet";
  v_keylock = false;
  v_schlachtfeld = 0;

  document.getElementById ("lade").style.visibility = "hidden";
    
  //Steuerbuttons sichtbar machen
  v_buttonN.style.visibility = "visible";
  v_buttonS.style.visibility = "visible";
  v_buttonW.style.visibility = "visible";
  v_buttonO.style.visibility = "visible";
  v_buttonI.style.visibility = "visible";
  v_buttonHeiltrank.style.visibility = "visible";
  v_buttonManatrank.style.visibility = "visible";
  document.getElementById ("ButtonMedizintrank").style.visibility = "visible";
  v_buttonPortalrolle.style.visibility = "visible";
  v_buttonVerlassen.style.visibility = "visible";
  document.getElementById ("ButtonSpeichern").style.visibility = "visible";
  document.getElementById ("Zauberliste").style.visibility = "visible";
  document.getElementById ("ButtonZaubern").style.visibility = "visible";
  document.getElementById ("ButtonMusik").style.visibility = "visible";
  document.getElementById ("ButtonSound").style.visibility = "visible";
  document.getElementById ("ButtonVollbild").style.visibility = "visible";
  
  v_kampfmeldungscanvas_context.fillStyle ="yellow";
  v_kampfmeldungscanvas_context.textBaseline = "top";
  v_kampfmeldungscanvas_context.font = "10px bold Arial";
  

  //Canvas sichtbar machen
  v_fenstercanvas.style.visibility = "visible";
  v_ausgabecanvas.style.visibility = "visible";
  v_statuscanvas.style.visibility = "visible";
  v_ausgabe2canvas.style.visibility = "visible";
    
  v_enginecanvas_context.clearRect (0, 0, 400, 400);
  v_statuscanvas_context.clearRect (0, 0, 400, 400);

  o_sound.p_init ();

  //Leveldaten
  f_leveldaten ();

  o_charakter.v_name = document.getElementById ("TextName").value;
  
  v_hintergrundcanvas_context.drawImage (v_hintergrund, 0, 0);

  v_tileset = "dorf"
  o_engine.p_drawMap (v_tileset, true);
  v_hintergrundcanvas.style.visibility = "visible";
  v_enginecanvas.style.visibility = "visible";

  o_zauber.p_init ();
  o_portale.p_init ();
    
  o_charakter.p_init ();
  o_charakter.p_setSprite (330, 250);
    
  o_ausgabe.p_init ();
  o_ausgabe.p_writeAll ();

  o_fenster.p_init ();
  o_truhen.p_init ();
  o_schlachtfelder.p_init ();
  o_questen.p_init ();
  o_manabrunnen.p_init ();

  //Tastatursteuerung
  document.addEventListener ("keydown", f_taste_druecken, false);

  //Spielersprite sichtbar schalten
  document.getElementById ("spielersprite").style.visibility = "visible";
  o_ausgabe.p_writeKoords ();
  o_ausgabe.p_writeLevel ();

  o_musik.p_play (0);
}
