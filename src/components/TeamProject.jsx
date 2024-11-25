import React from "react";
import styled from "styled-components";
import { IoPawSharp } from "react-icons/io5";
import { teamProject } from "../assets/teamProject"; // teamProject 데이터 가져오기

const Wrapper = styled.div`
  width: 100%;
  height: auto; /* 최소 높이를 100vh로 설정 */
`;

const Inner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 120px;
  @media screen and (max-width: 769px) {
    padding-top: 0;
    margin-top: 100px;
  }
  @media screen and (max-width: 390px) {
    margin-top: 0px;
  }
`;

const SubTitle = styled.div`
  width: 170px;
  height: 5%;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 10px;
  margin-top: 30px;
  margin-bottom: 30px;
  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
  }
`;

const TeamWrap = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  @media screen and (max-width: 769px) {
    gap: 40px;
  }
  @media screen and (max-width: 390px) {
    flex-direction: column;
    gap: 0px;
  }
`;

const Project = styled.div`
  position: relative;
  width: 45%;
  display: flex;
  gap: 20px;
  @media screen and (max-width: 769px) {
    gap: 100px;
  }
  @media screen and (max-width: 769px) {
    width: 90%;
  }

  .projectImage {
    img {
      filter: brightness(50%);
      width: 470px;
      height: 400px;
      border-radius: 10px;
      margin-bottom: 200px;
      object-fit: cover;
      object-position: top;
      @media screen and (max-width: 769px) {
        width: 350px;
        height: 400px;
      }
    }
  }

  .projectDetails {
    width: 83%;
    position: absolute;
    bottom: 34%;
    left: 4%;
    color: var(--white-color);
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media screen and (max-width: 769px) {
      width: 90%;
      font-size: 16px;
    }
    @media screen and (max-width: 390px) {
      width: 100%;
      font-size: 16px;
    }
    p {
      margin-top: 10px;
    }
    .projectSkill {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;

      .projectEtc {
        display: flex;
        gap: 10px;
        img {
          width: 25px;
          height: 25px;
          @media screen and (max-width: 769px) {
            width: 28px;
            height: 28px;
          }
        }
      }
      .urlImage {
        display: flex;
        gap: 10px;
        a {
          img {
            width: 30px;
            height: 30px;
            @media screen and (max-width: 769px) {
              width: 28px;
              height: 28px;
            }
          }
        }
      }
    }
  }
`;

const TeamProject = () => {
  return (
    <Wrapper>
      <Inner id="TeamProject">
        <SubTitle>
          <span>
            <IoPawSharp />
          </span>
          <span>Team Projects</span>
        </SubTitle>
        <TeamWrap>
          {teamProject.map((project, index) => (
            <Project key={index}>
              <div className="projectImage">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="projectDetails">
                <h2>{project.name}</h2>
                <span>{project.member}</span>
                <p>{project.desc}</p>
                <div className="projectSkill">
                  <div className="projectEtc">
                    <img src={project.skillOne} alt={project.title} />
                    {project.skillTwo && (
                      <img src={project.skillTwo} alt={project.title} />
                    )}
                    {project.skillThree && (
                      <img src={project.skillThree} alt={project.title} />
                    )}
                  </div>
                  <div className="urlImage">
                    <a
                      href={project.firstUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="firstUrl"
                        src={project.firstUrlImage}
                        alt="GitHub"
                      />
                    </a>
                    <a
                      href={project.secondUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="secondUrl"
                        src={project.secondUrlImage}
                        alt="Demo"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </Project>
          ))}
        </TeamWrap>
      </Inner>
    </Wrapper>
  );
};

export default TeamProject;
