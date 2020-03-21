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

function c_engine () 
{ 
  this.v_tile = new Image;
  this.v_tileset = "dorf";
}

c_engine.p_init = function ()
{
  this.v_tileset = "dorf";
}

c_engine.prototype.p_drawMap = function (v_tilerubrik, v_load)
{
  if (v_load == true)
  {
    //
    if (v_lvl >= 11 && v_lvl <= 43)
    {
      this.v_tile.src = "daten/gfk/tiles/" + v_tilerubrik + "/" + "tiles.png";
    }
    else
    {
      this.v_tile.src = "daten/gfk/tiles/tilesheet/tilesheet.png";
    }
    
    v_load = false;
  }
  if (v_load == false)
  {
    this.v_tile.onload = function ()
    {
      o_engine.p_drawMapX ();
    }
    o_engine.p_drawMapX ();
  }   
}

//lädt und zeichnet Tile an übergebener Position
c_engine.prototype.p_drawTile = function (v_sx, v_sy, v_x, v_y)
{
  v_enginecanvas_context.drawImage (this.v_tile, v_sx, v_sy, 20, 20, v_x, v_y, 20, 20);
}

//zeichnet TileMap
c_engine.prototype.p_drawMapX = function ()
{
  for (let v_i = 0; v_i < v_gamemap.length; v_i++ )
  {
    for (let v_j = 0; v_j < v_gamemap[v_i].length; v_j++)
    {
      switch (v_gamemap [v_i][v_j])
      {
        case "." : this.p_drawTile (0, 0, 20 * v_j, 20 * v_i); break;   //Grass
        case "-" : this.p_drawTile (20, 0, 20 * v_j, 20 * v_i); break;   //Boden
        case "=" : this.p_drawTile (40, 0, 20 * v_j, 20 * v_i); break;   //Mauer
        case "T" : this.p_drawTile (60, 0, 20 * v_j, 20 * v_i); break;   //Schild
        case "X" : this.p_drawTile (80, 0, 20 * v_j, 20 * v_i); break;   //Tür
        case "?" : this.p_drawTile (100, 0, 20 * v_j, 20 * v_i); break;   //Truhe
        case "+" : this.p_drawTile (120, 0, 20 * v_j, 20 * v_i); break;   //Weg
        case "#" : this.p_drawTile (140, 0, 20 * v_j, 20 * v_i); break;   //Treppe nach unten
        case "O" : this.p_drawTile (160, 0, 20  * v_j, 20 * v_i); break;   //NPC
        case "1" : this.p_drawTile (180, 0, 20  * v_j, 20 * v_i); break;   //NPC1
        case "2" : this.p_drawTile (0, 20, 20  * v_j, 20 * v_i); break;   //NPC2
        case "[" : this.p_drawTile (20, 20, 20  * v_j, 20 * v_i); break;   //Treppe nach oben
        case "s" : this.p_drawTile (40, 20, 20  * v_j, 20 * v_i); break;   //Schlachtfeld
        case "f" : this.p_drawTile (60, 20, 20  * v_j, 20 * v_i); break;   //Fels - Kolision 
        case "S" : this.p_drawTile (80, 20, 20  * v_j, 20 * v_i); break;   //Bosschlachtfeld
        case "~" : this.p_drawTile (100, 20, 20  * v_j, 20 * v_i); break;   //Wasser - Kolision
        case "U" : this.p_drawTile (120, 20, 20  * v_j, 20 * v_i); break;   //Durchgang
        case "o" : this.p_drawTile (140, 20, 20  * v_j, 20 * v_i); break;   //Übergang
      }
    }
  }
}

c_engine.prototype.p_changeLvl = function (v_Lvl, v_tileSet, v_Load, v_mXk, v_mYk)
{
    o_gui.p_hideAllButtons ();
    v_lvl = v_Lvl; v_keylock = true;
    f_leveldaten ();
    this.v_tileset = v_tileSet;
    o_engine.p_drawMap (this.v_tileset, v_Load);
    o_charakter.v_mxk = v_mXk; o_charakter.v_myk = v_mYk;
    v_statuscanvas_context.clearRect (0, 0, 400, 400);
    o_truhen.p_status (); o_schlachtfelder.p_status ();
    o_charakter.p_setSprite (o_charakter.v_mxk * 20 + 10, o_charakter.v_myk * 20 + 10);
    o_ausgabe.p_writeLevel ();
    o_gui.p_visibleAllButtons ();
    if (v_Lvl > o_charakter.v_mlvl) { o_charakter.v_mlvl = v_Lvl; } 
    v_keylock = false;
}
