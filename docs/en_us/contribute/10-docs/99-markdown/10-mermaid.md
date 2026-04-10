---
title: Mermaid
---

# Mermaid

## Flowchart

```mermaid
graph LR

Default

A[rect]
B(round corner rect)
C([Capsule])
D{diamond}
A --> B --> C --> D

E[[E]]
F((F))
G{{G}}
H(((H)))
E --> F --> G --> H
```

```mermaid
graph TD
    A[Start] --> B[Decision Point]
    B -->|Condition 1| C[Process 1]
    B -->|Condition 2| D[Process 2]
```

## Sequence Diagram

```mermaid
sequenceDiagram
    participant Client
    participant Server
    Client->>Server: Request Data
    Server-->>Client: Return Response
```

### Basic Syntax Elements

#### Participants

```mermaid
sequenceDiagram
    participant A as Client
    participant B as Server
```

#### Message Types

Lines:

- `-` solid line
- `-` dashed line

Arrows:

- `->` no arrow
- `->>` arrow
- `-x` cross line
- `-)` open

```mermaid
sequenceDiagram

A -> B: ->
A ->> B: ->>
A -x B: -x
A -X B: -X
A -) B: -)

A --> B: -->
A --) B: --)
```

#### Activation Boxes

```mermaid
sequenceDiagram
    A->>B: Call Method
    activate B
    B-->>A: Return Result
    deactivate B
```

#### Advanced Features

##### Conditional Logic

```mermaid
sequenceDiagram
    A->>B: Request
    alt Condition 1
        B->>C: Process 1
    else Condition 2
        B->>D: Process 2
    end
```

##### Loop Structure

```mermaid
sequenceDiagram
    A->>B: Start
    loop Daily Task
        B->>B: Execute Task
    end
```

##### Note

```mermaid
sequenceDiagram
    A->>B: Message
    Note right of B: This is a note
```

## Gantt Diagram

```mermaid
gantt
    title Project Timeline
    dateFormat  YYYY-MM-DD
    axisFormat &Y-^m
    section Phase
    Phase 1 :1950-10-25, 1951-07-01
    Phase 2 :1951-07-01, 1953-07-27
```

## Class Diagram

```mermaid
classDiagram
    Animal <|-- Dog
    Animal: +name
    Animal: +eat()
    Dog: +bark()
```

## State Diagram

```mermaid
stateDiagram
    [*] --> Stopped
    Stopped --> Running: Start
    Running --> Stopped: Stop
```

## Pie Chart

```mermaid
pie
    title Market Share
    "Product A" : 42.86
    "Product B" : 57.14
```

## Git Graph

```mermaid
gitGraph
    commit
    branch develop
    checkout develop
    commit
    commit
```

## Entity Relationship Diagram (ER Diagram)

```mermaid
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
```
