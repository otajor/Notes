module Main exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)

ships =
  [ { name = "X-wing", cost = 14888 }
  , { name = "Millenium Falcon", cost = 10000 }
  , { name = "Deat Star", cost = 240839 }
  ]

renderShip ship =
  li []
    [ text ship.name
    , text ", "
    , b []
      [ text <| toString ship.cost]
    ]

renderShips ships = 
  div
    [ style 
      [ ( "font-family", "-apple-system" )
      , ( "padding", "1em" )
      ]
    ]
    [ h1 [] [text "Ships" ]
    , ul [] (List.map renderShip ships)
    ]

main = renderShips ships
