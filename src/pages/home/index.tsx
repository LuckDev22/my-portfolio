// Styles
import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import { FaGithub } from "react-icons/fa";

// Page Style
import {
    Header,
    HeaderContent,
    HeaderButtonsArea,
    UserImage,
    StackCards,
    ProjectsArea,
    ProjectsAreaSocialMediaMessage,
    ProjectAreaWrapperColumns,
    ProjectsAreaContent,
} from "./style";

export const Home = (): JSX.Element => {
    const gihubUrl = `https://github.com/${userData.githubUser}`;
    const portfolioUrl = `https://github.com/${userData.githubUser}/my-portfolio`;

    return (
        <main id="home">
            <Header>
                <Container>
                    <HeaderContent>
                        <Flex>
                            <UserImage
                                src={`https://github.com/${userData.githubUser}.png`}
                                alt={userData.nameUser}
                                title={userData.nameUser}
                                width={"48px"}
                                height={"48px"}
                            />
                            <Text color="grey4">
                                Hello, my name is {userData.nameUser}
                            </Text>
                        </Flex>
                        <Text as="h1" type="heading1" color="grey5">
                            Desenvolvedor{" "}
                            <Text as="span" type="heading1" color="brand1">
                                Full Stack
                            </Text>{" "}
                            apaixonado por{" "}
                            <Text as="span" type="heading1" color="brand1">
                                tecnologia
                            </Text>
                        </Text>
                        <Text type="body1" color="grey2">
                            Olá e seja muito bem-vindo(a) ao meu portfólio! É
                            com imensa alegria que compartilho aqui um pouco
                            sobre minha paixão e trajetória como Desenvolvedor
                            Full Stack. Desde jovem, minha curiosidade inata
                            pelo mundo da tecnologia me levou a explorar
                            diversas linguagens de programação, e hoje posso
                            dizer que a programação se tornou muito mais do que
                            uma profissão para mim - é uma verdadeira forma de
                            arte, onde posso dar vida a ideias e criar soluções
                            inovadoras. Ao longo dos anos, tive a oportunidade
                            de me especializar em tecnologias como Node,
                            Typescript, JavaScript, PHP, React, Next, Git,
                            TypeORM, SQL, PostGreSql, Python entre outras, que
                            me permitem desenvolver diversas aplicações, além de
                            criar sistemas eficientes e dinâmicos. Cada projeto
                            que desenvolvi foi uma oportunidade de aprendizado e
                            crescimento, onde enfrentei desafios e busquei
                            soluções criativas.
                        </Text>
                        <HeaderButtonsArea>
                            <Button as="a" type="primary" href="#projects">
                                See Projects
                            </Button>
                            <Button
                                as="a"
                                type="outline"
                                target="_blank"
                                href={portfolioUrl}
                            >
                                See my portfolio source code
                            </Button>
                            <Button
                                color="grey5"
                                as="a"
                                css={{ "&:hover": { color: "$grey1" } }}
                                type="circle"
                                target="_blank"
                                href={gihubUrl}
                            >
                                <FaGithub />
                            </Button>
                        </HeaderButtonsArea>
                        <StackCards>
                            {stackData.map((stack, index) => (
                                <Stack
                                    key={index}
                                    title={stack.title}
                                    icon={stack.img}
                                />
                            ))}
                        </StackCards>
                    </HeaderContent>
                </Container>
            </Header>
            <ProjectsArea id="projects">
                <Container>
                    <ProjectAreaWrapperColumns>
                        <ProjectsAreaSocialMediaMessage>
                            <Text as="h2" type="heading4" color="grey4">
                                My projects
                            </Text>
                            <Text as="p" type="body1" color="grey2">
                                Some of my{" "}
                                <Text as="span" color="brand5">
                                    side projects
                                </Text>
                            </Text>
                        </ProjectsAreaSocialMediaMessage>
                        <ProjectsAreaContent>
                            <Project />
                        </ProjectsAreaContent>
                    </ProjectAreaWrapperColumns>
                </Container>
            </ProjectsArea>
            <Contacts />
        </main>
    );
};
