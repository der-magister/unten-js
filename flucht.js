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

function c_flucht () {}

c_flucht.prototype.p_test = function ()
{
  var v_zufall = 0;

  v_zufall = f_randomize (1, 20);

  if ((v_zone == "Kampf") || (v_zone = "Bosskampf"))
  {
    if (v_zufall <= o_charakter.v_geschick)
    {
      o_musik.p_stopAll ();
      v_enginecanvas_context.clearRect (0, 0, 420, 420);
      v_enginecanvas_context.fillText (v_kampftexte [9], 80, 50);
      document.getElementById ("spielersprite").style.visibility = "hidden";
      document.getElementById ("gegnersprite").style.visibility = "hidden";
      v_keylock = true; o_gui.p_hideAllButtons ();
      document.getElementById ("ButtonVerlassen").src = "daten/gfk/gui/beenden.png";
      document.getElementById ("ButtonI").src = "daten/gfk/gui/interaktion.png";
      document.getElementById ("ButtonVerlassen").title = "Beendet Spiel und geht zum Startbildschirm zurück";
      document.getElementById ("ButtonI").title = "Interaktionen";
      document.getElementById ("ButtonVerlassen").style.left = "630px";

      setTimeout (function ()
      {
        o_engine.p_drawMap (o_engine.v_tileset, false);
        o_charakter.p_setSprite (o_charakter.v_xk, o_charakter.v_yk);
        document.getElementById ("spielersprite").style.visibility = "visible";
        v_statuscanvas.style.visibility = "visible";
        o_gui.p_visibleAllButtons ();
        v_zone = "Gebiet";
        v_keylock = false;
        o_musik.p_play (1);

      }, 2000);
    }
    else
    {
      o_fenster.p_drawWindow ();
      o_fenster.p_writeText (v_kampftexte [10], "", "", "", "");
      document.getElementById ("ButtonI").title = "Angriff";
    }    
  }
}
