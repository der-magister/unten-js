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

function c_manabrunnen () 
{
  this.v_erledigt = []; //0 - nein, 1 - ja
}

c_manabrunnen.prototype.p_init = function ()
{
  for (let v_i = 1; v_i <= 20; v_i++)
  {
    this.v_erledigt [v_i] = 0;
  }
}

c_manabrunnen.prototype.p_manabrunnen = function (v_mbx, v_mby, v_mbnr)
{
  if ((o_charakter.v_mxk == v_mbx) && (o_charakter.v_myk == v_mby))
  {
    if (this.v_erledigt [v_mbnr] == 0)
    {
      o_fenster.p_drawWindow ();
      o_fenster.p_writeText ("Du trinkst von dem Wasser des Manabrunnens...", "", "", "Deine Manapunkte erhöhen sich permanent um 1!", "");
      o_charakter.v_mmanapunkte++; o_charakter.v_manapunkte = o_charakter.v_mmanapunkte; this.v_erledigt [v_mbnr] = 1;
      o_ausgabe.p_writeManapunkte (); 
    }
    else
    {
      o_fenster.p_drawWindow ();
      o_fenster.p_writeText ("Das Wasser des Manabrunnens ist versiegt...", "", "", "", "");
    }
  }
}
