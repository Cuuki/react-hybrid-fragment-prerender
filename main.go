package main

import (
    "os"
    "html/template"
)

func main() {
    t, err := template.ParseFiles("out/fragment/button.gohtml")

    if err != nil {
        panic(err)
    }

    data := struct {
        Name string
        AriaLabel string
    }{
        Name: "John Doe",
        AriaLabel: "Click me",
    }

    err = t.Execute(os.Stdout, data)

    if err != nil {
        panic(err)
    }
}
