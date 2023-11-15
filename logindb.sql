-- MySQL dump 10.13  Distrib 8.0.35, for Linux (x86_64)
--
-- Host: localhost    Database: logindb
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `empleados`
--

DROP TABLE IF EXISTS `empleados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empleados` (
  `idempleados` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `_user` varchar(45) NOT NULL,
  PRIMARY KEY (`idempleados`),
  UNIQUE KEY `user_UNIQUE` (`_user`)
) ENGINE=InnoDB AUTO_INCREMENT=329738 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empleados`
--

LOCK TABLES `empleados` WRITE;
/*!40000 ALTER TABLE `empleados` DISABLE KEYS */;
INSERT INTO `empleados` VALUES (329723,'Georgi Facello','georgi10001'),(329724,'Bezalel Simmel','bezalel10002'),(329725,'Parto Bamford','parto10003'),(329726,'Chirstian Koblick','chirstian10004'),(329727,'Kyoichi Maliniak','kyoichi10005'),(329728,'Anneke Preusig','anneke10006'),(329729,'Tzvetan Zielinski','tzvetan10007'),(329730,'Saniya Kalloufi','saniya10008'),(329731,'Sumant Peac','sumant10009'),(329732,'Duangkaew Piveteau','duangkaew10010');
/*!40000 ALTER TABLE `empleados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `taks`
--

DROP TABLE IF EXISTS `taks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `taks` (
  `idtaks` int NOT NULL AUTO_INCREMENT,
  `id_users` int NOT NULL,
  `titulo` varchar(50) DEFAULT NULL,
  `descripcion` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`idtaks`),
  KEY `fk_taks_empleado_idx` (`id_users`),
  CONSTRAINT `fk_taks_empleado` FOREIGN KEY (`id_users`) REFERENCES `users` (`idusers`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `taks`
--

LOCK TABLES `taks` WRITE;
/*!40000 ALTER TABLE `taks` DISABLE KEYS */;
/*!40000 ALTER TABLE `taks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `idusers` int NOT NULL AUTO_INCREMENT,
  `id_empleado` int NOT NULL,
  `user` varchar(45) NOT NULL,
  `password` varchar(200) NOT NULL,
  `tipo` int DEFAULT NULL,
  PRIMARY KEY (`idusers`),
  UNIQUE KEY `userscol_UNIQUE` (`user`),
  KEY `fk_users_empleado_idx` (`id_empleado`),
  CONSTRAINT `fk_users_empleado` FOREIGN KEY (`id_empleado`) REFERENCES `empleados` (`idempleados`)
) ENGINE=InnoDB AUTO_INCREMENT=327770 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (327748,329728,'anneke10006','$2a$10$.SxLkbj4HvAErPOO81sp7uDGEJ8N1IB4nMaf9l9.ttG0oX2jjmVla',2),(327749,329724,'bezalel10002','$2a$10$.SxLkbj4HvAErPOO81sp7uDGEJ8N1IB4nMaf9l9.ttG0oX2jjmVla',2),(327750,329726,'chirstian10004','$2a$10$.SxLkbj4HvAErPOO81sp7uDGEJ8N1IB4nMaf9l9.ttG0oX2jjmVla',2),(327751,329732,'duangkaew10010','$2a$10$.SxLkbj4HvAErPOO81sp7uDGEJ8N1IB4nMaf9l9.ttG0oX2jjmVla',2),(327752,329723,'georgi10001','$2a$10$.SxLkbj4HvAErPOO81sp7uDGEJ8N1IB4nMaf9l9.ttG0oX2jjmVla',2),(327753,329727,'kyoichi10005','$2a$10$.SxLkbj4HvAErPOO81sp7uDGEJ8N1IB4nMaf9l9.ttG0oX2jjmVla',2),(327754,329725,'parto10003','$2a$10$.SxLkbj4HvAErPOO81sp7uDGEJ8N1IB4nMaf9l9.ttG0oX2jjmVla',2),(327755,329730,'saniya10008','$2a$10$.SxLkbj4HvAErPOO81sp7uDGEJ8N1IB4nMaf9l9.ttG0oX2jjmVla',2),(327756,329731,'sumant10009','$2a$10$.SxLkbj4HvAErPOO81sp7uDGEJ8N1IB4nMaf9l9.ttG0oX2jjmVla',2),(327757,329729,'tzvetan10007','$2a$10$.SxLkbj4HvAErPOO81sp7uDGEJ8N1IB4nMaf9l9.ttG0oX2jjmVla',2),(327763,329728,'gus1','$2a$10$HIXij.PzqKFCjBPYqNsnfOwwbWGlAh3J2mRtsP8aJzpycmevu0lsO',1),(327764,329728,'gus2','$2a$10$MtNKJhdIsqmf94F4OVEuK.EXYM3XgS5nfYF1zxXSQgMvJY9wuQIPm',1),(327765,329728,'gus3','$2a$10$e2N1bKQGJJTL.s6j3s/MDeN74iKfSMuXCDkO3cNnZO/Ci8jagd8ea',1),(327766,329728,'gus4','$2a$10$ew4zTGsKZeZF9NqAUd5X5OqRv6EAJfdvQlw/HwT1y2XyZs09tSSke',1),(327767,329728,'gus5','$2a$10$whPwmGpnKhXmc.e7YM9fF.UQvm9TccXtu3olTd3SqyEMYzMl/yXeS',1),(327768,329728,'gus6','$2a$10$CNlHvvf9enzx3b/UnNaphuHVv9576kpjcOHjScQLVrFgQKQ0Zavpi',1),(327769,329728,'gus7','$2a$10$O4ls7.9HjK/VDhhiA8VNuuUzAN2Ku208EQhW0SrhkhCKS/pQ6PRay',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-15 16:47:29
