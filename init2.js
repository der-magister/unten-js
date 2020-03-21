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



function f_init2 ()
{
  v_version_old = localStorage.getItem ("unten_version");

  if (v_version_old != null)
  {
    v_keylock = false;
    v_zone = "Gebiet";

    document.getElementsByTagName("h1")[0].style.visibility = "hidden";
    v_textName.style.visibility = "hidden";

    document.getElementById ("krieger").style.visibility = "hidden";
    document.getElementById ("dieb").style.visibility = "hidden";
    document.getElementById ("zauberer").style.visibility = "hidden";
    document.getElementsByTagName("label")[0].style.display = "none";
    document.getElementsByTagName("label")[1].style.display = "none";
    document.getElementsByTagName("label")[2].style.display = "none";

    v_buttonNSpiel.style.visibility = "hidden";
    v_buttonASpiel.style.visibility = "hidden";
    document.getElementById ("kredits").style.visibility = "hidden";
    document.getElementById ("changelog").style.visibility = "hidden";
    
    v_stand = "alt";
    o_sound.p_load ();
  }
}

function f_init2_go ()
{
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

  //Canvas sichtbar machen
  v_hintergrundcanvas.style.visibility = "visible";
  v_enginecanvas.style.visibility = "visible";
  v_ausgabecanvas.style.visibility = "visible";
  v_statuscanvas.style.visibility = "visible";
  v_fenstercanvas.style.visibility = "visible";
  v_ausgabe2canvas.style.visibility = "visible";
  
  o_charakter.p_init ();
  o_truhen.p_init ();
  o_schlachtfelder.p_init ();
  o_ausgabe.p_init ();
  o_fenster.p_init ();
  o_questen.p_init (); 
  o_zauber.p_init ();
  o_portale.p_init ();
  o_manabrunnen.p_init ();
  o_laden.p_laden ();

  o_sound.p_init ();

  if (o_charakter.v_klasse == "Krieger")
  {
    document.getElementById ("spielersprite").src = "daten/gfk/spieler/Krieger-1.png"
  }
  else if  (o_charakter.v_klasse == "Dieb")
  {
    document.getElementById ("spielersprite").src = "daten/gfk/spieler/Dieb-1.png"
  }
  else if  (o_charakter.v_klasse == "Zauberer")
  {
    document.getElementById ("spielersprite").src = "daten/gfk/spieler/Zauberer-1.png"
  }

  v_kampfmeldungscanvas_context.fillStyle ="yellow";
  v_kampfmeldungscanvas_context.textBaseline = "top";
  v_kampfmeldungscanvas_context.font = "bold 10px Arial";

  //Leveldaten
  f_leveldaten ();
  v_hintergrundcanvas_context.drawImage (v_hintergrund, 0, 0);
  o_engine.p_drawMap (o_engine.v_tileset, true);
  o_charakter.p_setSprite (o_charakter.v_xk, o_charakter.v_yk);

  if (v_lvl != 1)
  {
    o_truhen.p_status ();
    o_schlachtfelder.p_status ();
  }
  else
  {
    o_portale.p_draw ();
  }

  //Spielersprite sichtbar schalten
  document.getElementById ("spielersprite").style.visibility = "visible";
    
  document.getElementById ("musik0").pause ();

  o_ausgabe.p_writeKoords ();
  o_ausgabe.p_writeLevel ();
  o_ausgabe.p_writeAll ();  

  //Tastatursteuerung
  document.addEventListener ("keydown", f_taste_druecken, false);

  if (v_lvl != 1)
  { 
    o_musik.p_play (1);
  }
  else
  {
    o_musik.p_play (0);
  }
}
