/************************************************
 Create Date Dimension Table
 ***********************************************/

-- Create First numbers table for key generation
declare @tSmallNumbers table (
  SmallNumber int not null);

insert into @tSmallNumbers (SmallNumber)
     values (0),(1),(2),(3),(4),(5),(6),(7),(8),(9);
go

-- Create Second numbers table for key generation
declare @tBigNumbers table (
  BigNumber bigint not null);

insert into @tBigNumbers (BigNumber)
     select tenthousands.number * 10000 + 
            thousands.number * 1000 + 
            hundreds.number * 100 + 
            tens.number * 10 + 
            ones.number)
       from @tSmallNumbers tenthousands,
            @tSmallNumbers thousands,
            @tSmallNumbers hundreds,
            @tSmallNumbers tens,
            @tSmallNumbers ones;
GO

if object_id('dbo.DimDate') is not null
  drop table dbo.DimDate;
 
-- Create Date Dimension Table
create table dbo.DimDate (
  DateKey        int not null,
  Date           datetime not null,
  Day            varchar(10) null,
  DayOfWeek      smallint null,
  DayOfMonth     smallint null,
  DayOfYear      smallint null,
  PreviousDay    datetime null,
  NextDay        datetime null,
  WeekOfYear     smallint null,
  WeekEndingDate datetime null,
  Month          varchar(10) null,
  MonthOfYear    smallint null,
  QuarterOfYear  smallint null,
  PreviousYear   int null,
  Year           int null,
  NextYear       int null);
go

-- Create Date Key and Date Fields
insert into DimDate (DateKey,
	                 Date)
     Select BigNumber,
	        dateadd(day,BigNumber,'1900-01-01') Date
       From @tBigNumbers
      where dateadd(day,BigNumber,'1900-01-01') between '1900-01-01' and '2030-12-31'
      order by BigNumber;
GO

-- Update all other fields with appropriate data.
update DimDate
   set Day = datename(DW, DATE),
	   DayOfWeek = DATEPART(WEEKDAY, DATE),
	   DayOfMonth = DAY(DATE),
	   DayOfYear = DATEPART(DY, DATE),
	   PreviousDay = DATEADD(DAY, - 1, DATE),
	   NextDay = DATEADD(DAY, 1, DATE),
	   WeekOfYear = DATEPART(WK, DATE),
	   WeekEndingDate = DATE + (7-datepart(dw,DATE)),
	   Month = DATENAME(MONTH, DATE),
	   MonthOfYear = MONTH(DATE),
	   QuarterOfYear = DATEPART(Q, DATE),
	   PreviousYear = YEAR(DATE)-1,
	   Year = YEAR(DATE),
	   NextYear = YEAR(DATE)+1;
