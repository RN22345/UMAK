# 09 · Database Management Systems (DBMS)
*Databases, keys, normalization, SQL, transactions and DBMS products. (Lesson 8a — pairs with `10_ds.md`.)*

> **How to use this page.** Start with **Basics**: that is what the elimination round tests. The sections after it
> are the deeper detail for the finals (identification, average/difficult). Tip: SQL command groups, keys and ACID come up again and again.

---

## Basics

### Core terms
- **Database** = organized collection of related data. **DBMS** = software used to **define, create, query and administer** databases (MySQL, Oracle...).
- **Metadata** = data about data; stored in the **data dictionary (system catalog)**.
- **SQL** = **Structured Query Language**.

### Relational model
- **Edgar F. Codd** (IBM, 1970) proposed the relational model. **Peter Chen** proposed the ER model (1976).
- **Table = relation · row = tuple (record) · column = attribute (field).**
- **Primary key** = uniquely identifies each row, cannot be NULL. **Candidate key** = minimal set of attributes that uniquely identifies a row. **Foreign key** = references the primary key of another table. **UNIQUE** constraint = all values in the column are different.
- **Referential integrity:** a foreign key value must match an existing primary key value **or be NULL**.
- **Many-to-many** relationships are implemented with a **junction (associative) table**.

### ER diagram symbols
| Symbol | Meaning |
|---|---|
| **Rectangle** | entity |
| **Diamond** | relationship |
| **Ellipse (oval)** | attribute |

### Normalization
- Purpose: prevent **insertion, update and deletion anomalies** by removing redundancy.
- **1NF** = atomic values, no repeating groups. **2NF** = removes **partial dependencies**. **3NF** = removes **transitive dependencies**.
- **Denormalization** = deliberately adding redundancy to improve **read** performance.

### SQL command groups
| Group | Commands |
|---|---|
| **DDL** (definition) | `CREATE, ALTER, DROP, TRUNCATE` |
| **DML** (manipulation) | `INSERT, UPDATE, DELETE` |
| **DQL** (query) | `SELECT` |
| **DCL** (control) | `GRANT, REVOKE` |
| **TCL** (transaction) | `COMMIT, ROLLBACK, SAVEPOINT` |

- `CREATE TABLE` creates a table; `ALTER TABLE` adds/changes columns; `UPDATE` modifies existing rows; `SELECT` retrieves data; `SELECT DISTINCT` **removes duplicate rows** from the result.
- **`DROP`** removes the table structure itself; **`TRUNCATE`** quickly removes all rows and resets identity (without logging each row).

### Query clauses
- **`WHERE`** filters **rows before grouping**; **`HAVING`** filters **groups after aggregation**; **`ORDER BY`** sorts results.
- **`LIKE`** wildcards: **`%`** = any number of characters, `_` = one character.
- Test for NULL with **`IS NULL`** (never `= NULL`).
- **`INNER JOIN`** = only rows matching in both tables. **`LEFT JOIN`** = all left rows plus matches from the right.
- **`UNION`** combines results and **removes duplicates** (`UNION ALL` keeps them).
- **View** = virtual table based on a `SELECT`. **Trigger** = code that runs automatically on INSERT/UPDATE/DELETE. **Index** = speeds up **reads**, may slow **writes**.

### Transactions
- **ACID:** **Atomicity** (all or nothing) · **Consistency** (valid state to valid state) · **Isolation** (concurrent transactions do not interfere) · **Durability** (committed data survives failures).
- **Dirty read** = reading another transaction's uncommitted data. Strongest isolation level = **SERIALIZABLE**.
- **CAP theorem:** a distributed system can guarantee at most two of **Consistency, Availability, Partition tolerance**.

### Products and data warehousing
- **MongoDB** = document · **Redis** = in-memory key-value store (caching) · **Neo4j** = graph · **SQLite** = embedded, serverless, file-based.
- **Microsoft SQL Server** = **T-SQL**; **Oracle** = **PL/SQL**.
- **OLTP** = Online Transaction Processing (many short transactions); **OLAP** = analysis of large datasets.
- **ETL** = Extract, Transform, Load. **Star schema:** central **fact table** surrounded by dimension tables.
- **Philippines:** **Data Privacy Act of 2012 (RA 10173)** governs personal data.

---

## Fundamentals
- **Data** = raw facts · **Database** = organized collection of related data · **DBMS** = software to define, create, query, update, secure and administer databases (e.g., MySQL, Oracle) · **Database system** = DB + DBMS + applications + users.
- **Metadata** = data about data, stored in the **data dictionary / system catalog**.
- **File system problems → DBMS solves:** data redundancy & inconsistency, difficulty in access, isolation, integrity problems, atomicity, concurrent-access anomalies, security.
- **Advantages:** reduced redundancy, consistency, sharing, security, backup/recovery, integrity enforcement, data independence. **Disadvantages:** cost, complexity, performance overhead, single point of failure.
- **Users/roles:** **DBA** (database administrator: security, backup, performance, user access), database designer/architect, application developers, end users (naive, casual, sophisticated), data analysts/engineers.
- **Three-schema (ANSI/SPARC) architecture:** **External** (user views) · **Conceptual/Logical** (whole DB structure) · **Internal/Physical** (storage). **Data independence:** *logical* (change conceptual w/o changing external) and *physical* (change internal w/o changing conceptual).
- **Languages:** DDL (define), DML (manipulate), DCL (control), TCL (transaction), DQL (query).
- **DBMS components:** query processor (parser, optimizer, executor), storage manager (buffer, file, index), transaction manager, lock manager, recovery manager.

## Database models · finals
| Model | Notes |
|---|---|
| **Hierarchical** | tree, parent–child 1:N (IBM IMS) |
| **Network** | graph, M:N (CODASYL/IDMS) |
| **Relational** | tables; **Edgar F. Codd, IBM, 1970** ("A Relational Model of Data for Large Shared Data Banks") |
| **Entity–Relationship** | Peter Chen, 1976 (conceptual) |
| **Object-oriented / object-relational** | |
| **NoSQL**: Document (MongoDB, CouchDB) · Key–value (Redis, DynamoDB) · Wide-column (Cassandra, HBase) · Graph (Neo4j) · Time-series (InfluxDB) · Search (Elasticsearch) · **Vector** (Pinecone, Milvus, pgvector, Chroma — embeddings for AI/RAG) | NoSQL = "Not Only SQL" |
- **NewSQL**: distributed SQL (CockroachDB, Google Spanner, TiDB).
- **CAP theorem** (Eric Brewer): a distributed store can guarantee only two of **Consistency, Availability, Partition tolerance**. NoSQL often follows **BASE** (Basically Available, Soft state, Eventually consistent) vs relational **ACID**.

## Entity–Relationship (ER) model
- **Entity** (thing: Student) · **Entity set** · **Attribute** (property). Attribute kinds: *simple* vs *composite* (name → first/last), *single-valued* vs *multivalued* (phone numbers; double ellipse), *derived* (age from birthdate; dashed), *key* (underlined).
- **Weak entity** (no own key; depends on owner; double rectangle) with **identifying relationship** (double diamond).
- **Relationship** (diamond) with **degree** (unary/recursive, binary, ternary) and **cardinality** **1:1, 1:N, M:N**; **participation** total (double line) vs partial. M:N resolved by **associative/junction (bridge) table**.
- **Notations:** Chen (diamonds), **Crow's foot** (IE), UML class diagrams. **Generalization/specialization (ISA)**, aggregation.
- **Design stages:** requirements analysis → **conceptual (ER)** → **logical (relational schema)** → **physical (indexes, storage)** → implementation.
- ER → relational mapping: entity → table; 1:N → FK on the "many" side; M:N → junction table with two FKs; multivalued attribute → separate table.

## Relational model
- Terms: **Relation = table · Tuple = row/record · Attribute = column/field · Domain = allowed values · Degree = # of columns · Cardinality = # of rows · Schema vs Instance.**
- **Keys:**
  - **Super key** (any set of attributes that uniquely identifies a row) ⊇ **Candidate key** (minimal super key) → **Primary key** (chosen candidate; unique, not null) ; remaining candidates = **alternate keys**.
  - **Composite key** (2+ columns) · **Surrogate key** (system-generated, e.g., auto-increment/UUID) · **Natural key** · **Foreign key** (references PK in another table; enforces referential integrity) · **Unique key** (allows one NULL in many DBs).
- **Integrity:** **Entity integrity** (PK not null) · **Referential integrity** (FK must match an existing PK or be null) · **Domain integrity** · **User-defined**. Referential actions: `ON DELETE CASCADE / SET NULL / RESTRICT / NO ACTION`.
- **Relational algebra:** **σ** selection (rows) · **π** projection (columns) · **∪** union · **∩** intersection · **−** difference · **×** Cartesian product · **⋈** join (theta, equi, natural, outer) · **÷** division · **ρ** rename. Relational calculus (tuple/domain). **Codd's 12 rules**.
- Properties of relations: no duplicate tuples, order of rows/columns irrelevant, atomic values.

## Normalization
- **Purpose:** reduce redundancy and avoid **anomalies** — **insertion, update, deletion**. Based on **functional dependencies (FD)** X → Y ("X determines Y").
- **1NF:** atomic values; no repeating groups/multivalued attributes; has a key.
- **2NF:** 1NF + **no partial dependency** (non-key attribute depends on part of a composite key). (Only matters for composite keys.)
- **3NF:** 2NF + **no transitive dependency** (non-key → non-key). "Every non-key attribute depends on the key, the whole key, and nothing but the key."
- **BCNF (Boyce–Codd):** for every FD X → Y, X is a **super key**.
- **4NF:** no non-trivial multivalued dependencies. **5NF:** no join dependencies. 
- **Denormalization:** deliberately add redundancy for read performance (data warehouses).
- Quick example: Orders(OrderID, CustomerID, CustomerName, ProductID, Qty) → CustomerName depends on CustomerID (transitive/partial) → split into Customers, Orders, OrderItems.
- **Armstrong's axioms**: reflexivity, augmentation, transitivity. **Closure** of attributes X⁺. **Lossless join** & **dependency preservation** in decomposition.

## SQL (Structured Query Language)
- Origin: IBM (Donald Chamberlin & Raymond Boyce) as **SEQUEL** for System R (1970s); ANSI standard 1986, ISO 1987; pronounced "S-Q-L" or "sequel". **Declarative**, 4GL.
- **Sub-languages:**
  | Group | Commands |
  |---|---|
  | **DDL** (Data Definition) | `CREATE, ALTER, DROP, TRUNCATE, RENAME, COMMENT` |
  | **DML** (Data Manipulation) | `INSERT, UPDATE, DELETE, MERGE` (`SELECT` = DQL/part of DML) |
  | **DQL** (Query) | `SELECT` |
  | **DCL** (Control) | `GRANT, REVOKE` (`DENY` in SQL Server) |
  | **TCL** (Transaction) | `COMMIT, ROLLBACK, SAVEPOINT, SET TRANSACTION` |
- `TRUNCATE` (DDL; removes all rows fast, resets identity, can't roll back in many DBs) vs `DELETE` (DML; row-by-row with WHERE; rollbackable) vs `DROP` (removes table structure).

### Syntax essentials
```sql
CREATE TABLE Student (
  StudentID INT PRIMARY KEY AUTO_INCREMENT,
  FirstName VARCHAR(50) NOT NULL,
  Email     VARCHAR(100) UNIQUE,
  Age       INT CHECK (Age >= 16),
  CourseID  INT,
  FOREIGN KEY (CourseID) REFERENCES Course(CourseID)
);
INSERT INTO Student (FirstName, Email, Age) VALUES ('Ana','ana@mail.com',19);
UPDATE Student SET Age = 20 WHERE StudentID = 1;
DELETE FROM Student WHERE Age < 16;
ALTER TABLE Student ADD Phone VARCHAR(15);
SELECT DISTINCT City FROM Student WHERE Age BETWEEN 18 AND 25 AND FirstName LIKE 'A%'
ORDER BY City DESC LIMIT 10;
```
- **Clause order (written):** `SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY → LIMIT/OFFSET`. **Logical execution order:** `FROM/JOIN → WHERE → GROUP BY → HAVING → SELECT → DISTINCT → ORDER BY → LIMIT`. `WHERE` filters rows *before* grouping; `HAVING` filters groups (use with aggregates).
- **Operators:** `= <> != < > <= >=`, `AND OR NOT`, `BETWEEN a AND b` (inclusive), `IN (...)`, `LIKE` (`%` any chars, `_` one char), `IS NULL / IS NOT NULL` (never `= NULL`), `ANY/ALL/EXISTS`.
- **Aggregates:** `COUNT(*)` (all rows) vs `COUNT(col)` (non-null), `SUM, AVG, MIN, MAX`; ignore NULLs (except COUNT(*)). `GROUP BY dept` with `HAVING COUNT(*) > 5`.
- **Joins** (assume A, B tables):
  - `INNER JOIN` → only matching rows.
  - `LEFT (OUTER) JOIN` → all of A + matches from B (NULL if none). `RIGHT JOIN` → reverse. `FULL OUTER JOIN` → all rows of both.
  - `CROSS JOIN` → Cartesian product (|A|×|B| rows). `SELF JOIN` → table joined with itself (employee–manager). `NATURAL JOIN` → on same-named columns.
- **Set operators:** `UNION` (distinct), `UNION ALL` (keeps duplicates), `INTERSECT`, `EXCEPT` (`MINUS` in Oracle). Same number/type of columns required.
- **Subqueries:** in WHERE (`WHERE salary > (SELECT AVG(salary) FROM emp)`), FROM (derived table), SELECT (scalar), **correlated** (references outer query), `EXISTS`.
- **Functions:** string `UPPER, LOWER, LENGTH/LEN, SUBSTRING, CONCAT, TRIM, REPLACE`; numeric `ROUND, CEIL, FLOOR, ABS, MOD`; date `NOW(), CURDATE(), DATEDIFF, YEAR()`; null `COALESCE, IFNULL, NVL, NULLIF`; `CASE WHEN … THEN … ELSE … END`; `CAST/CONVERT`.
- **Window functions:** `ROW_NUMBER(), RANK(), DENSE_RANK(), NTILE(), LAG(), LEAD(), SUM() OVER (PARTITION BY … ORDER BY …)`. **CTE** `WITH x AS (...)`. `RANK` leaves gaps after ties; `DENSE_RANK` doesn't.
- **NULL logic:** NULL = unknown; `NULL = NULL` → unknown (not true); `NULL + 5` → NULL; three-valued logic.
- **Views** (virtual tables; `CREATE VIEW`), **Materialized view** (stored result), **Indexes** (speed reads, slow writes; **B-tree**, hash, bitmap, full-text; **clustered** = defines physical order, only one per table; **non-clustered** = separate structure), **Stored procedure** (precompiled, `CALL`/`EXEC`), **Function**, **Trigger** (fires on INSERT/UPDATE/DELETE: BEFORE/AFTER), **Cursor**, **Sequence**, **Synonym**, **Schema**, **Transaction**.
- **Data types:** `INT, BIGINT, SMALLINT, DECIMAL(p,s)/NUMERIC, FLOAT, CHAR(n)` (fixed) vs `VARCHAR(n)` (variable), `TEXT`, `DATE, TIME, DATETIME/TIMESTAMP`, `BOOLEAN`, `BLOB`, `JSON`, `UUID`, `ENUM`.
- **Constraints:** `PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL, CHECK, DEFAULT`, `AUTO_INCREMENT` (MySQL) / `IDENTITY` (SQL Server) / `SERIAL` (PostgreSQL).
- **Dialect differences:** `LIMIT 5` (MySQL/PostgreSQL/SQLite) = `TOP 5` (SQL Server) = `FETCH FIRST 5 ROWS ONLY` (Oracle/ANSI); string concat `||` (ANSI/Postgres/Oracle) vs `CONCAT()` vs `+` (SQL Server); Oracle dual table; `NVL`.
- **SQL injection** prevention: parameterized queries / prepared statements → `12`.

### Practice
```text
Employees: (1 Ann, Sales, 30000) (2 Ben, Sales, 40000) (3 Cy, IT, 50000) (4 Di, IT, 70000) (5 Ed, HR, NULL)

Q1: SELECT COUNT(*), COUNT(salary) FROM Employees;           → 5, 4
Q2: SELECT AVG(salary) FROM Employees;                      → 47500 (NULL ignored: 190000/4)
Q3: SELECT dept, MAX(salary) FROM Employees GROUP BY dept;  → Sales 40000, IT 70000, HR NULL
Q4: SELECT dept FROM Employees GROUP BY dept HAVING COUNT(*) > 1;  → Sales, IT
Q5: SELECT name FROM Employees WHERE salary > 35000 ORDER BY salary DESC;  → Di, Cy, Ben
Q6: SELECT * FROM Employees WHERE salary = NULL;            → no rows (use IS NULL)
Q7: Table A has 4 rows, B has 3 rows. A CROSS JOIN B → 12 rows.
Q8: INNER JOIN of A(1,2,3) and B(2,3,4) on id → 2 rows; LEFT JOIN → 3 rows; FULL OUTER → 4 rows.
```

## Transactions, concurrency, recovery
- **Transaction** = logical unit of work. **ACID:** **A**tomicity (all or nothing) · **C**onsistency (valid state → valid state) · **I**solation (concurrent transactions don't interfere) · **D**urability (committed data survives crashes).
- States: active → partially committed → committed / failed → aborted. `BEGIN/START TRANSACTION … COMMIT / ROLLBACK`; `SAVEPOINT`.
- **Concurrency problems:** **lost update**, **dirty read** (reading uncommitted data), **non-repeatable read**, **phantom read**. **Isolation levels** (weakest→strongest): `READ UNCOMMITTED → READ COMMITTED → REPEATABLE READ → SERIALIZABLE`.
- **Locking:** shared (S/read) vs exclusive (X/write); **two-phase locking (2PL)** (growing then shrinking phase) ensures serializability; **deadlock** (detect via wait-for graph; victim rollback); optimistic vs pessimistic; **MVCC** (multi-version concurrency control; PostgreSQL, Oracle); timestamp ordering. **Serializability**: conflict, view.
- **Recovery:** **log (WAL – write-ahead logging)**, **checkpoints**, **undo/redo**, shadow paging, ARIES. **Backups:** full, incremental, differential; hot/cold; point-in-time recovery. **High availability:** replication (primary–replica/master–slave, multi-primary), clustering, failover; **sharding** (horizontal partitioning) vs **vertical partitioning**; **RPO/RTO**.
- **Security:** authentication, authorization (GRANT), roles, encryption at rest/in transit (TDE), auditing, masking, least privilege.

## Data warehousing & BI · finals
- **OLTP** (many short transactions; normalized; e.g., POS) vs **OLAP** (analysis; denormalized; multidimensional). **Data warehouse** (subject-oriented, integrated, time-variant, non-volatile — **Bill Inmon**; Kimball = dimensional modeling), **data mart**, **data lake** (raw), **lakehouse**.
- **Star schema** (central **fact table** with measures + surrounding **dimension tables**) vs **snowflake schema** (normalized dimensions). **OLAP operations:** roll-up, drill-down, slice, dice, pivot. **ETL** (Extract–Transform–Load) vs **ELT**. Cloud DWs: Snowflake, BigQuery, Redshift, Azure Synapse, Databricks.
- **Big-data DB**: Hadoop HDFS, HBase, Hive (SQL on Hadoop), Spark SQL.

## DBMS products & trivia · finals
| Product | Vendor / note |
|---|---|
| **Oracle Database** | Oracle Corp (Larry Ellison); PL/SQL |
| **MySQL** | open-source, now Oracle (acquired Sun 2010); creator Michael "Monty" Widenius → fork **MariaDB**; named after daughter "My" |
| **PostgreSQL** | open-source, advanced ORDBMS; from Berkeley POSTGRES (Michael Stonebraker); `psql`; extensions (PostGIS, pgvector) |
| **Microsoft SQL Server** | T-SQL, SSMS |
| **SQLite** | embedded, serverless, file-based (phones, browsers); D. Richard Hipp |
| **MS Access** | desktop; .accdb |
| **IBM Db2**, **SAP HANA** (in-memory), **Teradata** | |
| **MongoDB** | document (BSON/JSON); collections & documents; "humongous" |
| **Redis** | in-memory key–value, caching, pub/sub |
| **Cassandra** | wide-column, high write; Facebook → Apache |
| **Neo4j** | graph; Cypher query language |
| **Firebase / Firestore** (Google), **Supabase** (open-source Firebase alternative on PostgreSQL), **DynamoDB** (AWS), **Cosmos DB** (Azure) | BaaS / managed |
- **ORM** (object-relational mapping): Hibernate, Entity Framework, SQLAlchemy, Sequelize, Prisma, Eloquent. **Connectors:** ODBC, JDBC. **GUI tools:** phpMyAdmin, MySQL Workbench, DBeaver, pgAdmin, SSMS, DataGrip. Stack names: **LAMP** (Linux, Apache, MySQL, PHP), **MEAN/MERN** (MongoDB, Express, Angular/React, Node).
- **Philippines:** Data Privacy Act of 2012 (RA 10173) governs personal data in databases; regulator **National Privacy Commission (NPC)**.

---

## ✅ Quick self-check
- Father of the relational model → **E. F. Codd (IBM, 1970)**; ER model → **Peter Chen**
- Software managing databases → **DBMS**
- Row in a table = **tuple/record**; column = **attribute/field**; number of columns = **degree**; rows = **cardinality**
- Uniquely identifies a row, minimal → **Candidate key**; chosen one → **Primary key**; links tables → **Foreign key**
- PK cannot be NULL → **Entity integrity**; FK must match PK → **Referential integrity**
- 1NF → **atomic values**; 2NF → **no partial dependency**; 3NF → **no transitive dependency**; BCNF → **every determinant is a candidate key**
- DDL commands → **CREATE, ALTER, DROP, TRUNCATE**; DML → **INSERT, UPDATE, DELETE**; DCL → **GRANT, REVOKE**; TCL → **COMMIT, ROLLBACK, SAVEPOINT**
- Filter groups → **HAVING**; filter rows → **WHERE**
- Wildcards → **% and _** in LIKE
- Join returning only matches → **INNER JOIN**; all left rows → **LEFT JOIN**
- Combine results removing duplicates → **UNION**; keep duplicates → **UNION ALL**
- ACID stands for → **Atomicity, Consistency, Isolation, Durability**
- Reading uncommitted data → **Dirty read**
- CAP theorem → **Consistency, Availability, Partition tolerance (pick 2)**
- Central table in star schema → **Fact table**
- ETL → **Extract, Transform, Load**
- Document DB → **MongoDB**; key–value in-memory → **Redis**; graph → **Neo4j**; wide-column → **Cassandra**
- Embedded serverless DB → **SQLite**
- Index speeds up **reads** but slows **writes**
- OLTP vs OLAP → **transactions vs analytics**
- Data dictionary stores → **metadata**
