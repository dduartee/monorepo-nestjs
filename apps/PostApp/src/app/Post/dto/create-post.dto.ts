import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
    @ApiProperty({
        description: 'The title of the post',
        example: 'My First Post'
    })
    title: string;

    @ApiProperty({
        description: 'The content of the post',
        example: 'This is the content of my first post'
    })
    content: string;
    
    @ApiProperty({
        description: 'The ID of the author (user) of the post',
        example: '123e4567-e89b-12d3-a456-426614174000'
    })
    authorId: string;
    // published false by default
}
