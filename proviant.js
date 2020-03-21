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

function c_proviant () {}

c_proviant.prototype.p_test = function ()
{
  if (o_charakter.v_schritte == 300) 
  {
    if (o_charakter.v_proviant >= 1)
    {
      o_charakter.v_proviant--; o_charakter.v_schritte = 0;
      o_ausgabe.p_writeProviant ();
    }
    else
    {
      o_charakter.v_lebenspunkte -= 15;
      o_ausgabe.p_writeLebenspunkte ();
      o_charakter.v_zustand = "hungrig";
      o_ausgabe.p_writeZustand ();

      if (o_charakter.v_lebenspunkte <= 0)
      {
        v_enginecanvas_context.clearRect (0, 0, 420, 420);
        v_enginecanvas_context.fillText (v_kampftexte [13], 75, 50);
        document.getElementById ("gegnersprite").style.visibility = "hidden";
        document.getElementById ("spielersprite").style.visibility = "hidden";

        setTimeout (function ()
        {
          keylock = true;
          document.getElementById ("ausgabe2canvas").style.visibility = "hidden";
          o_gui.p_disableAllGame ();
          o_gui.p_enableStartscreen ();
          v_textName.value = "Hier Charakternamen eingeben";
        }, 4000);
      }

    }
  }
}
