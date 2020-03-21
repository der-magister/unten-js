//   Unten - ein Rollenspiel im Retrodesign
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

"use strict";

var v_kaufheiltrank = document.getElementById ("KaufHeiltrank");
var v_kaufmanatrank = document.getElementById ("KaufManatrank");
var v_kaufportalrolle = document.getElementById ("KaufPortalrolle");
var v_kaufproviant = document.getElementById ("KaufProviant");

//Startbildschirmbuttons
var v_buttonNSpiel = document.getElementById ("ButtonNSpiel");
var v_buttonASpiel = document.getElementById ("ButtonASpiel");
var v_buttonKredits = document.getElementById ("ButtonKredits");

var v_textName = document.getElementById ("TextName");

//Steuerbuttons
var v_buttonN = document.getElementById ("ButtonN");
var v_buttonS = document.getElementById ("ButtonS");
var v_buttonW = document.getElementById ("ButtonW");
var v_buttonO = document.getElementById ("ButtonO");
var v_buttonI = document.getElementById ("ButtonI");

//Inventarbuttons
var v_buttonHeiltrank = document.getElementById ("ButtonHeiltrank");
var v_buttonManatrank = document.getElementById ("ButtonManatrank");
var v_buttonPortalrolle = document.getElementById ("ButtonPortalrolle");

//Verlassen-/Fluchtbutton
var v_buttonVerlassen = document.getElementById ("ButtonVerlassen");

//Canvas
var v_fenstercanvas = document.getElementById ("fenstercanvas");
var v_fenstercanvas_context = v_fenstercanvas.getContext ("2d");

var v_ausgabecanvas = document.getElementById ("ausgabecanvas");
var v_ausgabecanvas_context = v_ausgabecanvas.getContext ("2d");

var v_enginecanvas = document.getElementById ("enginecanvas");
var v_enginecanvas_context = v_enginecanvas.getContext ("2d");

var v_kampfhintergrundcanvas = document.getElementById ("hintergrundcanvas");
var v_kampfhintergrundcanvas_context = v_kampfhintergrundcanvas.getContext ("2d");

var v_statuscanvas = document.getElementById ("statuscanvas");
var v_statuscanvas_context = v_statuscanvas.getContext ("2d");

var v_ausgabe2canvas = document.getElementById ("ausgabe2canvas");
var v_ausgabe2canvas_context = v_ausgabe2canvas.getContext ("2d");

var v_kampfmeldungscanvas = document.getElementById ("kampfmeldungscanvas");
var v_kampfmeldungscanvas_context = v_kampfmeldungscanvas.getContext ("2d");

var v_lvl = 1;
var v_zone = "Gebiet";
var v_keylock = false;
var v_go = false;
var v_schlachtfeld = 0;
var v_version_old = "";
var v_version = "004b";
var v_stand = "neu";

var v_hintergrundcanvas = document.getElementById ("hintergrundcanvas");
var v_hintergrundcanvas_context = v_hintergrundcanvas.getContext ("2d");

var v_hintergrund = new Image ();

//var win = nw.Window.get ();

v_hintergrund.src = "daten/gfk/gui/hintergrund.png";

//Ressourcen
var v_gamemap = [[]];
var v_background = new Image ();

var v_musikArray = new Array ();

for (let v_i = 0; v_i <= 10; v_i++) 
{ 
  v_musikArray [v_i] = new Audio();
  v_musikArray [v_i].loop = true;
}

var v_soundArray = new Array ();

for (let v_i = 0; v_i <= 6; v_i++) 
{ 
  v_soundArray [v_i] = new Audio();
  v_soundArray [v_i].loop = false;
}

var o_charakter = new c_charakter ();
var o_engine = new c_engine ();
var o_fenster = new c_fenster ();
var o_ausgabe = new c_ausgabe ();
var o_sound = new c_sound ();
var o_musik = new c_musik ();
var o_gui = new c_gui ();
var o_heiler = new c_heiler ();
var o_haendler = new c_haendler ();
var o_heiltrank = new c_heiltrank ();
var o_manatrank = new c_manatrank ();
var o_medizintrank = new c_medizintrank ();
var o_portalrolle = new c_portalrolle ();
var o_proviant = new c_proviant ();
var o_truhen = new c_truhen ();
var o_schlachtfelder = new c_schlachtfelder ();
var o_schilder = new c_schilder ();
var o_questen = new c_questen ();
var o_gegner = new c_gegner ();
var o_flucht = new c_flucht ();
var o_zauber = new c_zauber ();
var o_kampf = new c_kampf ();
var o_portale = new c_portale ();
var o_manabrunnen = new c_manabrunnen ();
var o_gfx = new c_gfx ();

var o_lvl0001 = new c_lvl0001 ();
var o_lvl0002 = new c_lvl0002 ();
var o_lvl0003 = new c_lvl0003 ();
var o_lvl0004 = new c_lvl0004 ();
var o_lvl0005 = new c_lvl0005 ();
var o_lvl0006 = new c_lvl0006 ();
var o_lvl0007 = new c_lvl0007 ();
var o_lvl0008 = new c_lvl0008 ();
var o_lvl0009 = new c_lvl0009 ();
var o_lvl0010 = new c_lvl0010 ();
var o_lvl0011 = new c_lvl0011 ();
var o_lvl0012 = new c_lvl0012 ();
var o_lvl0013 = new c_lvl0013 ();
var o_lvl0014 = new c_lvl0014 ();
var o_lvl0015 = new c_lvl0015 ();
var o_lvl0016 = new c_lvl0016 ();
var o_lvl0017 = new c_lvl0017 ();
var o_lvl0018 = new c_lvl0018 ();
var o_lvl0019 = new c_lvl0019 ();
var o_lvl0020 = new c_lvl0020 ();
var o_lvl0021 = new c_lvl0021 ();
var o_lvl0022 = new c_lvl0022 ();
var o_lvl0023 = new c_lvl0023 ();
var o_lvl0024 = new c_lvl0024 ();
var o_lvl0025 = new c_lvl0025 ();
var o_lvl0026 = new c_lvl0026 ();
var o_lvl0027 = new c_lvl0027 ();
var o_lvl0028 = new c_lvl0028 ();
var o_lvl0029 = new c_lvl0029 ();
var o_lvl0030 = new c_lvl0030 ();
var o_lvl0031 = new c_lvl0031 ();
var o_lvl0032 = new c_lvl0032 ();
var o_lvl0033 = new c_lvl0033 ();
var o_lvl0034 = new c_lvl0034 ();
var o_lvl0035 = new c_lvl0035 ();
var o_lvl0036 = new c_lvl0036 ();
var o_lvl0037 = new c_lvl0037 ();
var o_lvl0038 = new c_lvl0038 ();
var o_lvl0039 = new c_lvl0039 ();
var o_lvl0040 = new c_lvl0040 ();
var o_lvl0041 = new c_lvl0041 ();
var o_lvl0042 = new c_lvl0042 ();
var o_lvl0043 = new c_lvl0043 ();

var o_laden = new c_laden ();
var o_speichern = new c_speichern ();

v_version_old = localStorage.getItem ("unten_version");

if (v_version_old == null)
{
  document.getElementById ("ButtonASpiel").disabled = "true";
  document.getElementById ("ButtonASpiel").title = "Kein gespeichertes Spiel vorhanden.";
}

//Zufallszahlgenerator
function f_randomize (v_min, v_max) 
{
	return Math.floor (Math.random () * (v_max - v_min + 1)) + v_min;
}

//Eventlistener Startscreen
document.getElementById ("ButtonNSpiel").addEventListener ("click", f_init, false);
document.getElementById ("ButtonASpiel").addEventListener ("click", f_init2, false);

document.getElementById ("TextName").value = "Hier Charakternamen eingeben"
