---
title: Mermaid
---

# Mermaid

## 流程图 (Flowchart)

```mermaid
graph LR

Default

A[rect]
B(round cornor rect)
C([Capsule])
D{菱形}
A --> B --> C --> D

E[[E]]
F((F))
G{{G}}
H(((H)))
E --> F --> G --> H
```

```mermaid
graph TD
    A[开始] --> B[决策点]
    B -->|条件1| C[处理1]
    B -->|条件2| D[处理2]
```

## 序列图 (Sequence Diagram)

```mermaid
sequenceDiagram
    participant 客户端
    participant 服务器
    客户端->>服务器: 请求数据
    服务器-->>客户端: 返回响应
```

### 基本语法元素

#### 参与者（Participants）

```mermaid
sequenceDiagram
    participant A as 客户端
    participant B as 服务器
```

#### 消息类型

线条：

- `-` 实线
- `--` 虚线

箭头：

- `->` 无箭头
- `->>` 箭头
- `-x` 叉线
- `-)` 开放

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

#### 激活框（Activation Boxes）

```mermaid
sequenceDiagram
    A->>B: 调用方法
    activate B
    B-->>A: 返回结果
    deactivate B
```

#### 高级功能

##### 条件逻辑

```mermaid
sequenceDiagram
    A->>B: 请求
    alt 条件1
        B->>C: 处理1
    else 条件2
        B->>D: 处理2
    end
```

##### 循环结构

```mermaid
sequenceDiagram
    A->>B: 开始
    loop 每日任务
        B->>B: 执行任务
    end
```

##### 注释

```mermaid
sequenceDiagram
    A->>B: 消息
    Note right of B: 这是一个注释
```

## 甘特图 (Gantt Diagram)

```mermaid
gantt
    title 项目时间表
    dateFormat  YYYY-MM-DD
    axisFormat &Y-^m
    section 阶段
    第一阶段 :1950-10-25, 1951-07-01
    第二阶段 :1951-07-01, 1953-07-27
```

## 类图 (Class Diagram)

```mermaid
classDiagram
    Animal <|-- Dog
    Animal: +name
    Animal: +eat()
    Dog: +bark()
```

## 状态图 (State Diagram)

```mermaid
stateDiagram
    [*] --> 停止
    停止 --> 运行: 启动
    运行 --> 停止: 停止
```

## 饼图 (Pie Chart)

```mermaid
pie
    title 市场份额
    "产品A" : 42.86
    "产品B" : 57.14
```

## Git 图 (Git Graph)

```mermaid
gitGraph
    commit
    branch develop
    checkout develop
    commit
    commit
```

## 实体关系图 (ER Diagram)

```mermaid
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
```
