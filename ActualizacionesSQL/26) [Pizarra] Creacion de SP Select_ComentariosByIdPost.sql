USE [SistemaDispensario]
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Select_ComentariosByIdPost] @IdPost bigint
AS
BEGIN

SELECT * FROM PizarraComentarios WHERE IdPost = @IdPost

END
