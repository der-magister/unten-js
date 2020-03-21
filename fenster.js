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

function c_fenster ()
{
  this.v_xk = 0; 
  this.v_yk = 0; 
  this.v_aktiv = false; 
  this.v_grafik = new Image ();
}

c_fenster.prototype.p_init = function ()
{
  this.v_grafik.src = "daten/gfk/system/fenster.png"; 
  v_fenstercanvas_context.fillStyle = "white";
  v_fenstercanvas_context.font = "12px Arial"; 
  v_fenstercanvas_context.textBaseline = "top";
} 

c_fenster.prototype.p_drawWindow = function ()
{
  if (v_zone != "Haendler") 
  {
    o_sound.p_play (1);
  } 

  o_gui.p_hideMoveButtons ();
  o_gui.p_hideItemButtons ();
  o_gui.p_hideZaubernButtons ();
  o_gui.p_hideKontrollButtons ();
  document.getElementById ("ButtonVollbild").style.visibility = "hidden";

  document.getElementById ("ButtonI").title = "Interaktionen"; 

  if ((v_zone == "Kampf") || (v_zone == "Bosskampf"))
  {
    document.getElementById ("spielersprite").style.visibility = "hidden";
    document.getElementById ("gegnersprite").style.visibility = "hidden";
  }

  if (o_charakter.v_yk > 240)
  {
    document.getElementById ("spielersprite").style.visibility = "hidden"; 
  }

  this.v_xk = 0, this.v_yk = 0; this.v_aktiv = true; 
  v_fenstercanvas_context.drawImage (this.v_grafik, this.v_xk, this.v_yk);
}

c_fenster.prototype.p_clearWindow = function ()
{
  this.v_xk = 0, this.v_yk = 0; this.v_aktiv = false; 
  v_fenstercanvas_context.clearRect (this.v_xk, this.v_yk, this.v_xk + 380, this.v_yk + 140); 
  o_sound.p_stop (1);

  if ((o_charakter.v_yk > 240) && (v_zone == "Gebiet"))
  {
    document.getElementById ("spielersprite").style.visibility = "visible";
  }

  if ((v_zone == "Kampf") || (v_zone == "Bosskampf"))
  {
    document.getElementById ("spielersprite").style.visibility = "visible";
    document.getElementById ("gegnersprite").style.visibility = "visible";
    o_gui.p_visibleItemButtons ();
    o_gui.p_visibleZaubernButtons ();
    document.getElementById ("ButtonVerlassen").style.visibility = "visible";

    if (v_zone == "Kampf") { o_kampf.p_angriffGegner (); }
  }
  else if (v_zone == "Haendler")
  {
    document.getElementById ("ButtonI").style.visibility = "visible";
    document.getElementById ("ButtonVerlassen").style.visibility = "visible";
  }
  else if (v_zone == "Gebiet")
  {
    o_gui.p_visibleMoveButtons ();
    o_gui.p_visibleItemButtons ();
    o_gui.p_visibleZaubernButtons ();
    o_gui.p_visibleKontrollButtons ();
    document.getElementById ("ButtonVollbild").style.visibility = "visible";
  }
} 

c_fenster.prototype.p_writeText = function (a, b, c, d, e)
{
  v_fenstercanvas_context.fillText (a, 5, 5); 
  v_fenstercanvas_context.fillText (b, 5, 20); 
  v_fenstercanvas_context.fillText (c, 5, 32);
  v_fenstercanvas_context.fillText (d, 5, 45); 
  v_fenstercanvas_context.fillText (e, 5, 58);
}
