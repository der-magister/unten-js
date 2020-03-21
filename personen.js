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

function c_heiler () {}

c_heiler.prototype.p_start = function ()
{
  o_fenster.p_drawWindow (20, 260);
  
  if (o_charakter.v_lebenspunkte < o_charakter.v_mlebenspunkte)
  {
    o_fenster.p_writeText (v_texte [3], "", "", "", "");
    o_charakter.v_lebenspunkte = o_charakter.v_mlebenspunkte;
    o_ausgabe.p_writeLebenspunkte ();
  }
  else
  {
    o_fenster.p_writeText (v_texte [4], "", "", "", "");
  }
}
