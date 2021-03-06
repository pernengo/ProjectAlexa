USE [SistemaDispensario]
GO
/****** Object:  StoredProcedure [dbo].[Insert_Post]    Script Date: 26/02/2019 1:31:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER procedure [dbo].[Insert_Post](
										@TituloPost varchar(60),
										@IdProfesional bigint,
										@FechaCreacion varchar(50),
										@IdPaciente bigint,
										@Estado varchar(20))
as
BEGIN
INSERT INTO [PizarraPosts] VALUES
						   (
						   @TituloPost,
						   @IdProfesional,
						   convert(datetime,@FechaCreacion,120),
						   @IdPaciente,
						   @Estado
						   )
SELECT Max(Id) FROM PizarraPosts
END

