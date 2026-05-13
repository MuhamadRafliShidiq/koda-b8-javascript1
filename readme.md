# Javascript

## Flowchart

Flowchart Luas dan Keliling Lingkaran

```mermaid

    flowchart TD

    a@{ shape: circle, label: "Start" }
    b@{ shape: lean-r, label: "r" }
    k@{ shape: diamond, label: "typeof r !== 'number'" }
    l@{ shape: lean-r, label: "error = 'r must be a number'" }
    c@{ shape: diamond, label: " r%7 == 0" }
    i@{ shape: rect, label: " phi = 3,14" }
    j@{ shape: rect, label: " phi = 22/7" }
    d@{ shape: rect, label: "L = phi * r * r" }
    e@{ shape: rect, label: "K = 2 * phi * r" }
    f@{ shape: lean-r, label: "'{L}'" }
    g@{ shape: lean-r, label: "'{K}'" }
    h@{ shape: dbl-circ, label: "Stop" }

    a --> b --> k
    k --True--> l --> h
    k --> c
    c --True--> j
    c --False--> i

    j --> d
    i --> d
    d --> e --> f --> g --> h
```
