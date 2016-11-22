module Main exposing (..)

import Html exposing (text)
import List 

type alias Person = {
  name : String
  , age : Int
}

people = 
  [{name = "Legolas", age = 894}
  , {name = "Gimli", age = 499}
  ]

names : List Person -> List String
names people = List.map (\peep -> peep.name) people

findPerson : String -> List Person -> Maybe Person
findPerson name people = List.foldl (\peep memo ->
  case memo of
    Just _ -> memo
    Nothing -> if peep.name == name then
                Just peep
                else
                Nothing
  ) Nothing people

main = 
  text <| toString <| findPerson "Legolas" people

-- note: no mixed lists in Elm i.e. no mixing strings, ints etc in the same list.
