USE [SistemaDispensario]
GO
/****** Object:  StoredProcedure [dbo].[Select_TagById]    Script Date: 21/01/2019 0:43:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [dbo].[Select_TagById](@Id bigint)
as
begin
select * from Tags where Id=@Id
end


SET ANSI_NULLS ON
