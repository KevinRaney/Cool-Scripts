/** Create Date Dimension Table **/
/* Create First numbers table for key generation */
CREATE TABLE Numbers_Small (Number INT);

INSERT INTO Numbers_Small
VALUES (0)
	,(1)
	,(2)
	,(3)
	,(4)
	,(5)
	,(6)
	,(7)
	,(8)
	,(9);
GO

/* Create Second numbers table for key generation */
CREATE TABLE Numbers_Big (Number_Big BIGINT);

INSERT INTO Numbers_Big (Number_Big)
SELECT (tenthousands.number * 10000 + thousands.number * 1000 + hundreds.number * 100 + tens.number * 10 + ones.number) AS number_big
FROM numbers_small tenthousands
	,numbers_small thousands
	,numbers_small hundreds
	,numbers_small tens
	,numbers_small ones;
GO

if object_id('dbo.DimDate') is not null
  drop table dbo.DimDate;
 
/* Create Date Dimension Table */
CREATE TABLE [dbo].[DimDate] (
	[DateKey] [int] NOT NULL
	,[Date] [datetime] NOT NULL
	,[Day] [char](10) NULL
	,[DayOfWeek] [smallint] NULL
	,[DayOfMonth] [smallint] NULL
	,[DayOfYear] [smallint] NULL
	,[PreviousDay] [datetime] NULL
	,[NextDay] [datetime] NULL
	,[WeekOfYear] [smallint] NULL
	,[WeekEndingDate] [datetime] null
	,[Month] [char](10) NULL
	,[MonthOfYear] [smallint] NULL
	,[QuarterOfYear] [smallint] NULL
	,[PreviousYear] int null
	,[Year] [int] NULL
	,[NextYear] int NULL
	);
GO

/* Create Date Key and Date Fields */
INSERT INTO [DimDate] (
	DateKey
	,DATE
	)
SELECT number_big
	,DATEADD(day, number_big, '1900-01-01') AS DATE
FROM numbers_big
WHERE DATEADD(day, number_big, '1900-01-01') BETWEEN '1900-01-01'
		AND '2030-12-31'
ORDER BY number_big;
GO

/* Update all other fields with appropriate data. */
UPDATE [DimDate]
SET Day = DATENAME(DW, DATE)
	,DayOfWeek = DATEPART(WEEKDAY, DATE)
	,DayOfMonth = DAY(DATE)
	,DayOfYear = DATEPART(DY, DATE)
	,PreviousDay = DATEADD(DAY, - 1, DATE)
	,NextDay = DATEADD(DAY, 1, DATE)
	,WeekOfYear = DATEPART(WK, DATE)
	,WeekEndingDate = DATE + (7-datepart(dw,DATE))
	,Month = DATENAME(MONTH, DATE)
	,MonthOfYear = MONTH(DATE)
	,QuarterOfYear = DATEPART(Q, DATE)
	,PreviousYear = YEAR(DATE)-1
	,Year = YEAR(DATE)
	,NextYear = YEAR(DATE)+1;
GO

/* Drop Temp Tables */
DROP TABLE Numbers_Small;

DROP TABLE Numbers_Big;
