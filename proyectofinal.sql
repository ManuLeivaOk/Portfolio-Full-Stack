-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 30-11-2021 a las 21:41:23
-- Versión del servidor: 5.5.24-log
-- Versión de PHP: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `proyectofinal`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`) VALUES
(1, 'Licenciatura en Psicología ', 'Universidad Nacional de Córdoba - Facultad de Psicología', 'El 12/12/19 me recibí como Licenciado en Psicología. Dos años después comencé a buscar opciones en el campo de la programación y llegué al desarrollo web. Motivado, busqué opciones para comenzar mi formación.'),
(2, 'Diplomatura en Desarrollo Web Full Stack con React Js', 'Centro eLearning - Universidad Tecnológica Nacional de Buenos Aires', 'En abril de 2021 comencé el cursado de la diplomatura y finalicé el cursado en el 30 de noviembre con la entrega de éste proyecto. En la diplomatura trabajamos con HTML, CSS Y JAVASCRIPT para entender las bases del desarrollo web. Luego comenzamos a utilizar React Js para el manejo del frontend. Por último, a través de Node Js y Express, aprendimos el manejo básico del backend, conectando con bases de dato SQL. '),
(4, 'Introducción al Desarrollo Web I y II', 'Google Actívate', 'Realicé los dos cursos introductorios certificados que ofrece Google, a través de su plataforma Google Actívate para afianzar mis conocimientos sobre las bases del desarrollo web.'),
(5, 'Formación autodidacta a través de diversas plataformas', 'Canales de YouTube y Udemy', 'Ya dentro del mundo del desarrollo web, mi curiosidad y ganas de seguir aprendiendo, me fueron acercando a muchas propuestas que hay disponibles para formación online. Realice varios cursos de Juan Pablo de la Torre Valdéz en Udemy, los cursos de HTML, CSS Y JS de "Soy Dalto" en YouTube, cursos de Fernando Herrera en Udemy, entre otras muchas incursiones.  '),
(6, '#OpenToWork', 'Front-end developer Jr.', 'En diciembre de 2021, después de muchos meses de dedicación y compromiso con mi formación, estoy listo para mi primera búsqueda laboral en el segmento. Estoy ansioso y motivado por migrar al mercado laboral IT, ¡garantizo compromiso y responsabilidad! ');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'manu', '81dc9bdb52d04dc20036dbd8313ed055');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
