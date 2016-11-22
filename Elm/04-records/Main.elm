module Main exposing (..)

import Html exposing (text)

type alias Dog = {
  name: String,
  age: Int
}

dog =
  { name = "Spock"
  , age = 4
  }

renderDog: Dog -> String
renderDog dog = dog.name ++ ", " ++ (toString dog.age)

main =
  text <| renderDog dog
