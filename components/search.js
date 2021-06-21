import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
} from "@chakra-ui/react"
import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
} from "@chakra-ui/react"
import { Button, ButtonGroup } from "@chakra-ui/react"
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { Heading } from "@chakra-ui/react"
import { Search2Icon } from '@chakra-ui/icons'
import { Flex, Spacer } from "@chakra-ui/react"
import { CloseButton } from "@chakra-ui/react"
import { useHotkeys } from 'react-hotkeys-hook';
import { getSortedPostsData } from '../lib/posts'
import React from "react";

export default function Search({ allPostsData }) {
    const [isOpen, setIsOpen] = React.useState(false)
    const onClose = () => setIsOpen(false)
    const opener = () => setIsOpen(true)
    const cancelRef = React.useRef()
    useHotkeys('ctrl+k', (e) => {
        e.preventDefault()
        setIsOpen(true)
    });

    return (
        <>
            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <Flex>
                                <Heading fontSize="3xl" fontWeight="bold">Search</Heading>
                                <Spacer />
                                <CloseButton onClick={onClose} />
                            </Flex>
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents="none"
                                    children={<Search2Icon color="gray.300" />}
                                />
                                <Input type="text" placeholder="Search my blog..." autoFocus />
                            </InputGroup>
                            {allPostsData.map(({ id, date, title }) => (
                                <Link href={`/posts/${id}`}>
                                    <a>
                                        <Stat size="md">
                                            <StatLabel>Blog post</StatLabel>
                                            <StatNumber>{title}</StatNumber>
                                            <StatHelpText>{date}</StatHelpText>
                                        </Stat>
                                    </a>
                                </Link>
                            ))}
                        </AlertDialogBody>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}